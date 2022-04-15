import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Item, Material } from 'src/app/models/item.model';
import { materialList } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
      transition(
        'expanded <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MaterialTableComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  public items$: Observable<Material> | undefined;
  public dataSource!: MatTableDataSource<Item>;
  private openSubs: Subscription[] = [];

  public rarityList: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  public categoriesList: string[] = [
    'Collectible',
    'Minerals',
    'Jewels',
    'Crystals',
    'Sticks and Stems',
    'Liquids',
    'Feathers',
    'Shells and Bones',
    'Stones',
    'Strings',
    'Shards',
    'Furs',
    'Powders and Spores',
    'Cloths and Skins',
    'Claws and Fangs',
    'Scales',
    'Trash',
    'Other',
    'Vegetable',
    'Mushroom',
    'Fruit',
    'Plant',
  ];

  public locationList: string[] = [
    'Cluck-Cluck Nest',
    'Delirium Lava Ruins',
    "Demon's Den",
    'Fall and Winter Area',
    'Floating Empire',
    'Forest of Beginnings',
    'Idra Cave',
    'Leon Karnak',
    'Maya Road',
    'Obsidian Mansion',
    'Revival Cave',
    'Rune Prana',
    'Sechs Territory',
    'Selphia',
    'Selphia Plain',
    'Sharance Maze',
    'Spring Area',
    'Summer Area',
    'Water Ruins',
    'World of Fields',
    'Yokmir Cave',
    'Yokmir Forest',
  ];

  @Input('displayedColumns') displayedColumns: string[] = [
    'name',
    'rarity',
    'category',
    'difficulty',
  ];
  @Input('flexDirection') flexDirection = 'row';
  @Input('showAddButton') showAddButton = false;

  public expandedItem: Item | undefined = {};
  public showStats: boolean = false;
  public showSecondaryStats: boolean = false;
  public showAdvancedFilters: boolean = false;
  public items!: Item[];
  public filteredItems!: Item[];
  public selectedLocation: string = '';
  public selectedCategory: string = '';
  public selectedRarity: number = -1;
  public noneRarity: number = -1;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() clickedItem = new EventEmitter<Item>();

  constructor(private itemService: ItemService) {}

  ngAfterViewInit(): void {
    this.openSubs.push(
      this.itemService.loadItems().subscribe((x) => {
        this.items = x;
        this.filteredItems = x;
        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngOnDestroy(): void {
    this.openSubs.forEach((x) => x.unsubscribe());
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleClick(item: Item) {
    console.log(item);
    this.expandedItem = this.expandedItem === item ? undefined : item;

    this.showStats =
      item.statInfo?.atk ||
      item.statInfo?.def ||
      item.statInfo?.matk ||
      item.statInfo?.mdef ||
      item.statInfo?.str ||
      item.statInfo?.vit ||
      item.statInfo?.int
        ? true
        : false;

    this.showSecondaryStats =
      item.statInfo?.drainAtk ||
      item.statInfo?.parAtk ||
      item.statInfo?.crit ||
      item.statInfo?.drainRes ||
      item.statInfo?.psnAtk ||
      item.statInfo?.sickAtk ||
      item.statInfo?.slpAtk ||
      item.statInfo?.sealAtk ||
      item.statInfo?.psnRes ||
      item.statInfo?.sealRes ||
      item.statInfo?.parRes ||
      item.statInfo?.slpRes ||
      item.statInfo?.ftgRes ||
      item.statInfo?.sickRes ||
      item.statInfo?.diz ||
      item.statInfo?.knockAtk ||
      item.statInfo?.faintRes ||
      item.statInfo?.dizRes ||
      item.statInfo?.critRes ||
      item.statInfo?.knockRes ||
      item.statInfo?.knock ||
      item.statInfo?.stun ||
      item.statInfo?.ftgAtk ||
      item.statInfo?.faintAtk ||
      item.statInfo?.upgradeEffct ||
      item.statInfo?.effect ||
      item.statInfo?.fireRes ||
      item.statInfo?.waterRes ||
      item.statInfo?.windRes ||
      item.statInfo?.earthRes
        ? true
        : false;
  }

  addItem(item: Item) {
    this.clickedItem.emit(item);
  }

  filterItems() {
    let tempArray = [];
    tempArray = this.items;

    if (this.selectedLocation === '') {
      this.filteredItems = tempArray;
    } else {
      let temp: Item[] = [];
      temp = temp.concat(
        tempArray.filter((x) =>
          x.drop?.locations?.includes(this.selectedLocation)
        ),
        tempArray.filter((x) =>
          x.drop?.monsters?.some((y) =>
            y.locations.some((z) => z.includes(this.selectedLocation))
          )
        ),
        tempArray.filter((x) =>
          x.drop?.fishing?.some((y) =>
            y.location.includes(this.selectedLocation)
          )
        ),
        tempArray.filter((x) =>
          x.drop?.other?.some((y) =>
            y.locations.includes(this.selectedLocation)
          )
        )
      );
      tempArray = temp;
    }
    if (this.selectedCategory !== '') {
      tempArray = tempArray.filter((x) => x.category === this.selectedCategory);
    }
    if (this.selectedRarity !== -1) {
      tempArray = tempArray.filter((x) => x.rarity === this.selectedRarity);
    }
    this.filteredItems = tempArray;

    this.dataSource.data = this.filteredItems;
  }
}
