import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { Item, StatInfo } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public addedMaterials: Item[] = [];

  availableMaterials: Item[] = [];

  public availableLevels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public selectedLevel: number = 1;

  public calculatedStats: StatInfo = {};

  public allEffects: string[] = [];
  public totalLevel: number = 0;
  public totalRarity: number = 0;

  private tenFoldSteelOccurred = false;
  private doubleSteelOccurred = false;

  public gearChoice: string = 'Weapon';
  public damageTypeChoice: string = 'Physical';

  public gearChoices = ['Weapon', 'Gear'];
  public damageChoices = ['Physical', 'Magical'];

  public bonuses: Bonus = {
    atk: 0,
    matk: 0,
    def: 0,
    mdef: 0,
  };

  public bonusesRarity: Bonus = {
    atk: 0,
    matk: 0,
    def: 0,
    mdef: 0,
  };
  public bonusesLevel: Bonus = {
    atk: 0,
    matk: 0,
    def: 0,
    mdef: 0,
  };

  public levelBonusAtk: NumberNumberDict = {
    1: 0,
    30: 10,
    60: 25,
    90: 70,
    120: 200,
    150: 700,
  };
  public levelBonusMAtk: NumberNumberDict = {
    1: 0,
    30: 5,
    60: 10,
    90: 40,
    120: 180,
    150: 650,
  };

  public levelBonusDef: NumberNumberDict = {
    1: 0,
    30: 6,
    60: 15,
    90: 36,
    120: 180,
    150: 350,
  };
  public levelBonusMDef: NumberNumberDict = {
    1: 0,
    30: 5,
    60: 12,
    90: 28,
    120: 170,
    150: 350,
  };

  public rarityBonusDef: NumberNumberDict = {
    25: 3,
    50: 10,
    70: 20,
    100: 50,
    125: 90,
    150: 150,
    175: 400,
    200: 800,
  };

  public rarityBonusAtk: NumberNumberDict = {
    25: 10,
    50: 40,
    70: 80,
    100: 150,
    125: 300,
    150: 500,
    175: 1000,
    200: 2000,
  };

  public rarityBonusMAtk: NumberNumberDict = {
    25: 5,
    50: 15,
    70: 35,
    100: 100,
    125: 160,
    150: 400,
    175: 950,
    200: 1800,
  };

  chosenMaterials: Item[] = [];

  showSecondaryStats: boolean = false;
  showStats: boolean = false;
  showLevelBonuses: boolean = false;
  showRarityBonuses: boolean = false;
  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(item: Item) {
    const check = this.availableMaterials.indexOf(item) > -1;
    if (!check) {
      this.availableMaterials.push(item);
    }
  }

  removeItem(item: Item) {
    const index = this.availableMaterials.indexOf(item);
    if (index > -1) {
      this.availableMaterials.splice(index, 1);
    }
  }

  recalculateTotalStats(removedItem: Item, removedItemIndex: number) {
    if (
      removedItem.name === '10-Fold Steel' ||
      removedItem.name === 'Double Steel'
    ) {
      const previousItem = this.chosenMaterials[removedItemIndex - 1];
      for (let value in previousItem.statInfo) {
        if (
          typeof previousItem.statInfo[value as keyof StatInfo] === 'number'
        ) {
          (this.calculatedStats[value as keyof StatInfo] as number) =
            ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) -
            ((previousItem.statInfo[value as keyof StatInfo] as number) *
              (removedItem.statInfo?.upgradeEffct ?? 0) ?? 0) +
            (previousItem.statInfo[value as keyof StatInfo] as number);
        }
      }
    } else if (
      this.chosenMaterials.length > 0 &&
      removedItemIndex < this.chosenMaterials.length &&
      (this.chosenMaterials[removedItemIndex].name === '10-Fold Steel' ||
        this.chosenMaterials[removedItemIndex].name === 'Double Steel')
    ) {
      const upgradeItem = this.chosenMaterials[removedItemIndex];
      if (removedItemIndex === 0) {
        for (let value in removedItem.statInfo) {
          if (
            typeof removedItem.statInfo[value as keyof StatInfo] === 'number'
          ) {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) -
              ((removedItem.statInfo[value as keyof StatInfo] as number) *
                (upgradeItem.statInfo?.upgradeEffct ?? 0) ?? 0) +
              (removedItem.statInfo[value as keyof StatInfo] as number);
          }
        }

        this.chosenMaterials.splice(0, 1);
        this.calculatedStats.upgradeEffct =
          (this.calculatedStats.upgradeEffct ?? 0) -
          (upgradeItem.statInfo?.upgradeEffct ?? 0);
      } else {
        for (let value in removedItem.statInfo) {
          if (
            typeof removedItem.statInfo[value as keyof StatInfo] === 'number'
          ) {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) -
              ((removedItem.statInfo[value as keyof StatInfo] as number) *
                (upgradeItem.statInfo?.upgradeEffct ?? 0) ?? 0) +
              (removedItem.statInfo[value as keyof StatInfo] as number);
          }
        }
        const previousItem = this.chosenMaterials[removedItemIndex - 1];
        for (let value in previousItem.statInfo) {
          if (
            typeof previousItem.statInfo[value as keyof StatInfo] === 'number'
          ) {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) +
              ((previousItem.statInfo[value as keyof StatInfo] as number) *
                (upgradeItem.statInfo?.upgradeEffct ?? 0) ?? 0) -
              (previousItem.statInfo[value as keyof StatInfo] as number);
          }
        }
      }
    }
    const numberOfOccurrences = this.chosenMaterials.filter(
      (x) => x.name === removedItem.name
    ).length;
    const divisionNumber =
      2 * numberOfOccurrences === 0 ? 1 : 2 * numberOfOccurrences;

    console.log(divisionNumber);
    for (let value in removedItem.statInfo) {
      if (typeof removedItem.statInfo[value as keyof StatInfo] === 'number') {
        (this.calculatedStats[value as keyof StatInfo] as number) =
          ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) -
          ((removedItem.statInfo[value as keyof StatInfo] as number) /
            divisionNumber ?? 0);
      } else {
        if (
          this.chosenMaterials.filter((x) => x.name === removedItem.name)
            .length === 1
        ) {
          this.allEffects.push(
            removedItem.statInfo[value as keyof StatInfo] as string
          );
        }
      }
    }
    this.totalLevel -= removedItem.level!;
    this.totalRarity -= removedItem.rarity!;
  }

  removeItemFromChosen(item: Item) {
    const index = this.chosenMaterials.indexOf(item);

    if (index > -1) {
      const removedItem = this.chosenMaterials.splice(index, 1);
      this.recalculateTotalStats(removedItem[0], index);
      this.recalculateStats(this.gearChoice, this.damageTypeChoice);
      this.showSecondaryStats = this.checkSecondaryStats();
      this.showStats = this.checkPrimaryStats();
      this.showLevelBonuses = this.checkLevel();
      this.showRarityBonuses = this.checkRarity();
    }
  }

  copyArrayItem<T = any>(
    currentArray: Item[],
    targetArray: Item[],
    currentIndex: number,
    targetIndex: number
  ): void {
    let to = this.clamp(targetIndex, targetArray.length);

    if (currentArray.length && targetArray.length < 15) {
      console.log(targetArray[targetIndex + 1]);
      const clone = { ...currentArray[currentIndex] };
      if (clone.name === '10-Fold Steel' || clone.name === 'Double Steel') {
        if (to === 0) {
          to = 1;
        }
        const previousItem = targetArray[to - 1];
        console.log(previousItem);
        for (let value in previousItem.statInfo) {
          if (
            typeof previousItem.statInfo[value as keyof StatInfo] === 'number'
          ) {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) +
              ((previousItem.statInfo[value as keyof StatInfo] as number) *
                (clone.statInfo?.upgradeEffct ?? 0) ?? 0) -
              (previousItem.statInfo[value as keyof StatInfo] as number);
          }
        }
      } else if (
        targetIndex < targetArray.length &&
        targetIndex !== 0 &&
        (targetArray[targetIndex].name === '10-Fold Steel' ||
          targetArray[targetIndex].name === 'Double Steel')
      ) {
        const upgradeItem = targetArray[targetIndex];
        const previousItem = targetArray[targetIndex - 1];
        for (let value in clone.statInfo) {
          if (typeof clone.statInfo[value as keyof StatInfo] === 'number') {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) +
              ((clone.statInfo[value as keyof StatInfo] as number) *
                (upgradeItem.statInfo?.upgradeEffct ?? 0) ?? 0) -
              (clone.statInfo[value as keyof StatInfo] as number);
          }
        }
        for (let value in previousItem.statInfo) {
          if (
            typeof previousItem.statInfo[value as keyof StatInfo] === 'number'
          ) {
            (this.calculatedStats[value as keyof StatInfo] as number) =
              ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) -
              ((previousItem.statInfo[value as keyof StatInfo] as number) *
                (upgradeItem.statInfo?.upgradeEffct ?? 0) ?? 0) +
              (previousItem.statInfo[value as keyof StatInfo] as number);
          }
        }
      }
      const numberOfOccurrences = targetArray.filter(
        (x) => x.name === clone.name
      ).length;
      const divisionNumber =
        2 * numberOfOccurrences === 0 ? 1 : 2 * numberOfOccurrences;
      targetArray.splice(to, 0, clone);
      for (let value in clone.statInfo) {
        if (typeof clone.statInfo[value as keyof StatInfo] === 'number') {
          (this.calculatedStats[value as keyof StatInfo] as number) =
            ((this.calculatedStats[value as keyof StatInfo] as number) ?? 0) +
            ((clone.statInfo[value as keyof StatInfo] as number) /
              divisionNumber ?? 0);
        } else {
          if (targetArray.filter((x) => x.name === clone.name).length === 1) {
            this.allEffects.push(
              clone.statInfo[value as keyof StatInfo] as string
            );
          }
        }
      }
      this.totalLevel += clone.level!;
      this.totalRarity += clone.rarity!;
      if (this.gearChoice === 'Weapon') {
        for (let value of Object.keys(this.levelBonusAtk).reverse()) {
          if (+value <= this.totalLevel) {
            this.bonuses.atk =
              this.levelBonusAtk[+value as keyof NumberNumberDict];
            this.bonusesLevel.atk =
              this.levelBonusAtk[+value as keyof NumberNumberDict];
            break;
          }
        }
        for (let value of Object.keys(this.levelBonusMAtk).reverse()) {
          if (+value <= this.totalLevel) {
            this.bonuses.matk =
              this.levelBonusMAtk[+value as keyof NumberNumberDict];
            this.bonusesLevel.matk =
              this.levelBonusMAtk[+value as keyof NumberNumberDict];
            break;
          }
        }

        if (this.damageTypeChoice === 'Physical') {
          for (let value of Object.keys(this.rarityBonusAtk).reverse()) {
            if (+value <= this.totalRarity) {
              this.bonuses.atk +=
                this.rarityBonusAtk[+value as keyof NumberNumberDict];
              this.bonusesRarity.atk =
                this.rarityBonusAtk[+value as keyof NumberNumberDict];
              break;
            }
          }
        } else {
          for (let value of Object.keys(this.rarityBonusMAtk).reverse()) {
            if (+value <= this.totalRarity) {
              this.bonuses.matk +=
                this.rarityBonusMAtk[+value as keyof NumberNumberDict];
              this.bonusesRarity.matk =
                this.rarityBonusMAtk[+value as keyof NumberNumberDict];
              break;
            }
          }
        }
      } else {
        for (let value of Object.keys(this.levelBonusDef).reverse()) {
          if (+value <= this.totalLevel) {
            this.bonuses.def =
              this.levelBonusDef[+value as keyof NumberNumberDict];
            this.bonusesLevel.def =
              this.levelBonusDef[+value as keyof NumberNumberDict];
            break;
          }
        }
        for (let value of Object.keys(this.levelBonusMDef).reverse()) {
          if (+value <= this.totalLevel) {
            this.bonuses.mdef =
              this.levelBonusMDef[+value as keyof NumberNumberDict];
            this.bonusesLevel.mdef =
              this.levelBonusMDef[+value as keyof NumberNumberDict];
            break;
          }
        }
        for (let value of Object.keys(this.rarityBonusDef).reverse()) {
          if (+value <= this.totalRarity) {
            this.bonuses.def +=
              this.rarityBonusDef[+value as keyof NumberNumberDict];
            this.bonusesRarity.def =
              this.rarityBonusDef[+value as keyof NumberNumberDict];
            break;
          }
        }
      }

      this.showSecondaryStats = this.checkSecondaryStats();
      this.showStats = this.checkPrimaryStats();

      this.showLevelBonuses = this.checkLevel();
      this.showRarityBonuses = this.checkRarity();
    }
  }

  radioChangeGear($event: MatRadioChange) {
    this.recalculateStats($event.value, this.damageTypeChoice);
  }

  radioChangeType($event: MatRadioChange) {
    console.log($event.value);
    this.recalculateStats(this.gearChoice, $event.value);
  }

  recalculateStats(gearChoice: string, typeChoice: string) {
    this.bonuses = {
      atk: 0,
      matk: 0,
      def: 0,
      mdef: 0,
    };
    this.bonusesLevel = {
      atk: 0,
      matk: 0,
      def: 0,
      mdef: 0,
    };
    this.bonusesRarity = {
      atk: 0,
      matk: 0,
      def: 0,
      mdef: 0,
    };
    if (gearChoice === 'Weapon') {
      for (let value of Object.keys(this.levelBonusAtk).reverse()) {
        if (+value <= this.totalLevel) {
          this.bonuses.atk =
            this.levelBonusAtk[+value as keyof NumberNumberDict];
          this.bonusesLevel.atk =
            this.levelBonusAtk[+value as keyof NumberNumberDict];
          break;
        }
      }
      for (let value of Object.keys(this.levelBonusMAtk).reverse()) {
        if (+value <= this.totalLevel) {
          this.bonuses.matk =
            this.levelBonusMAtk[+value as keyof NumberNumberDict];
          this.bonusesLevel.matk =
            this.levelBonusMAtk[+value as keyof NumberNumberDict];
          break;
        }
      }

      if (typeChoice === 'Physical') {
        for (let value of Object.keys(this.rarityBonusAtk).reverse()) {
          if (+value <= this.totalRarity) {
            this.bonuses.atk +=
              this.rarityBonusAtk[+value as keyof NumberNumberDict];
            this.bonusesRarity.atk =
              this.rarityBonusAtk[+value as keyof NumberNumberDict];
            break;
          }
        }
      } else {
        for (let value of Object.keys(this.rarityBonusMAtk).reverse()) {
          if (+value <= this.totalRarity) {
            this.bonuses.matk +=
              this.rarityBonusMAtk[+value as keyof NumberNumberDict];
            this.bonusesRarity.matk =
              this.rarityBonusMAtk[+value as keyof NumberNumberDict];
            break;
          }
        }
      }
    } else {
      for (let value of Object.keys(this.levelBonusDef).reverse()) {
        if (+value <= this.totalLevel) {
          this.bonuses.def =
            this.levelBonusDef[+value as keyof NumberNumberDict];
          this.bonusesLevel.def =
            this.levelBonusDef[+value as keyof NumberNumberDict];
          break;
        }
      }
      for (let value of Object.keys(this.levelBonusMDef).reverse()) {
        if (+value <= this.totalLevel) {
          this.bonuses.mdef =
            this.levelBonusMDef[+value as keyof NumberNumberDict];
          this.bonusesLevel.mdef =
            this.levelBonusMDef[+value as keyof NumberNumberDict];
          break;
        }
      }
      for (let value of Object.keys(this.rarityBonusDef).reverse()) {
        if (+value <= this.totalRarity) {
          this.bonuses.def +=
            this.rarityBonusDef[+value as keyof NumberNumberDict];
          this.bonusesRarity.def =
            this.rarityBonusDef[+value as keyof NumberNumberDict];
          break;
        }
      }
    }
  }

  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  checkSecondaryStats() {
    return this.calculatedStats?.drainAtk ||
      this.calculatedStats?.parAtk ||
      this.calculatedStats?.crit ||
      this.calculatedStats?.drainRes ||
      this.calculatedStats?.psnAtk ||
      this.calculatedStats?.sickAtk ||
      this.calculatedStats?.slpAtk ||
      this.calculatedStats?.sealAtk ||
      this.calculatedStats?.psnRes ||
      this.calculatedStats?.sealRes ||
      this.calculatedStats?.parRes ||
      this.calculatedStats?.slpRes ||
      this.calculatedStats?.ftgRes ||
      this.calculatedStats?.sickRes ||
      this.calculatedStats?.diz ||
      this.calculatedStats?.knockAtk ||
      this.calculatedStats?.faintRes ||
      this.calculatedStats?.dizRes ||
      this.calculatedStats?.critRes ||
      this.calculatedStats?.knockRes ||
      this.calculatedStats?.knock ||
      this.calculatedStats?.stun ||
      this.calculatedStats?.ftgAtk ||
      this.calculatedStats?.faintAtk ||
      this.calculatedStats?.upgradeEffct ||
      this.calculatedStats?.effect ||
      this.calculatedStats?.fireRes ||
      this.calculatedStats?.waterRes ||
      this.calculatedStats?.windRes ||
      this.calculatedStats?.earthRes
      ? true
      : false;
  }

  checkPrimaryStats() {
    return this.calculatedStats?.atk ||
      this.calculatedStats?.def ||
      this.calculatedStats?.matk ||
      this.calculatedStats?.mdef ||
      this.calculatedStats?.str ||
      this.calculatedStats?.vit ||
      this.calculatedStats?.int
      ? true
      : false;
  }
  checkRarity() {
    return this.bonusesRarity?.atk ||
      this.bonusesRarity?.def ||
      this.bonusesRarity?.matk
      ? true
      : false;
  }

  checkLevel() {
    return this.bonusesLevel?.atk ||
      this.bonusesLevel?.def ||
      this.bonusesLevel?.matk ||
      this.bonusesLevel?.mdef
      ? true
      : false;
  }
}

interface NumberNumberDict {
  [key: number]: number;
}

interface Bonus {
  atk: number;
  matk: number;
  def: number;
  mdef: number;
}
