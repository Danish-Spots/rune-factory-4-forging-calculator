import { Material } from './item.model';

export const materialList: Material = {
  items: [
    {
      name: 'Fodder',
      rarity: 0,
      category: 'Collectible',
      drop: {},
      level: 1,
      difficulty: 0,
      statInfo: {
        matk: 1,
      },
    },
    {
      name: 'Scrap Metal',
      rarity: 0,
      category: 'Collectible',
      drop: {},
      level: 1,
      difficulty: 1,
      statInfo: {
        def: -2,
      },
    },
    {
      name: 'Iron',
      rarity: 1,
      category: 'Minerals',
      drop: {},
      level: 1,
      difficulty: 2,
      statInfo: {
        def: 1,
      },
    },
    {
      name: 'Scrap Metal+',
      rarity: 2,
      category: 'Minerals',
      drop: {},
      level: 1,
      difficulty: 0,
      statInfo: {
        def: 2,
      },
    },
    {
      name: 'Bronze',
      rarity: 4,
      category: 'Minerals',
      drop: {},
      level: 1,
      difficulty: 15,
      statInfo: {
        def: 4,
      },
    },
    {
      name: 'Silver',
      rarity: 7,
      category: 'Minerals',
      drop: {},
      level: 1,
      difficulty: 32,
      statInfo: {
        def: 7,
      },
    },
    {
      name: 'Gold',
      rarity: 9,
      category: 'Minerals',
      drop: {
        locations: ['Idra Cave', 'Maya Road'],
        monsters: [
          {
            name: 'Fortoise',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        def: 10,
      },
    },
    {
      name: 'Platinum',
      rarity: 12,
      category: 'Minerals',
      drop: {
        other: [
          {
            name: 'Wooden boxes',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        def: 25,
      },
    },
    {
      name: 'Orichalcum',
      rarity: 13,
      category: 'Minerals',
      drop: {
        locations: ['Leon Karnak'],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 95,
      },
    },
    {
      name: 'Dragonic Stone',
      rarity: 15,
      category: 'Minerals',
      drop: {
        locations: ['Rune Prana Floor 7'],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 95,
      },
    },
    {
      name: 'Amethyst',
      rarity: 0,
      category: 'Jewels',
      drop: {
        locations: ['Yokmir Forest'],
        monsters: [
          {
            name: 'Slime',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 4,
      statInfo: {
        mdef: 1,
      },
    },
    {
      name: 'Aquamarine',
      rarity: 2,
      category: 'Jewels',
      drop: {
        locations: ['Water Ruins', 'Maya Road'],
        monsters: [
          {
            name: 'Slime',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 11,
      statInfo: {
        mdef: 3,
      },
    },
    {
      name: 'Emerald',
      rarity: 5,
      category: 'Jewels',
      drop: {
        locations: ['Yokmir Cave', 'Maya Road'],
        monsters: [
          {
            name: 'Dark Slime',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 26,
      statInfo: {
        mdef: 5,
      },
    },
    {
      name: 'Ruby',
      rarity: 7,
      category: 'Jewels',
      drop: {
        locations: ['Delirium Lava Ruins', 'Maya Road'],
        monsters: [
          {
            name: 'Little Golem',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 36,
      statInfo: {
        mdef: 8,
      },
    },
    {
      name: 'Sapphire',
      rarity: 8,
      category: 'Jewels',
      drop: {
        locations: ['Sercerezo Hill'],
        monsters: [
          {
            name: 'Dark Slime',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 42,
      statInfo: {
        mdef: 12,
      },
    },
    {
      name: 'Diamond',
      rarity: 11,
      category: 'Jewels',
      drop: {
        locations: ['Sechs Territory', 'Rune Prana'],
        monsters: [
          {
            name: 'Crystal Mammoth',
            locations: ['Rune Prana Floor 3'],
          },
          {
            name: 'G Golem',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        mdef: 24,
      },
    },
    {
      name: 'Green Core',
      rarity: 13,
      category: 'Jewels',
      drop: {
        monsters: [
          {
            name: 'Emerald',
            locations: ['Rune Prana Floor 7'],
          },
          {
            name: 'Green',
            locations: ['World of Fields'],
          },
        ],
      },
      level: 1,
      difficulty: 81,
      statInfo: {
        mdef: 77,
      },
    },
    {
      name: 'Red Core',
      rarity: 13,
      category: 'Jewels',
      drop: {
        monsters: [
          {
            name: 'Red',
            locations: ['Autumn Road'],
          },
          {
            name: 'Rouge',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 81,
      statInfo: {
        mdef: 77,
      },
    },
    {
      name: 'Yellow Core',
      rarity: 13,
      category: 'Jewels',
      drop: {
        monsters: [
          {
            name: 'Olive',
            locations: ['Rune Prana Floor 7'],
          },
          {
            name: 'Yellow',
            locations: ['Sercerezo Hill'],
          },
        ],
      },
      level: 1,
      difficulty: 81,
      statInfo: {
        mdef: 77,
      },
    },
    {
      name: 'Blue Core',
      rarity: 13,
      category: 'Jewels',
      drop: {
        monsters: [
          {
            name: 'Blue',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Marin',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 81,
      statInfo: {
        mdef: 77,
      },
    },
    {
      name: 'Crystal Skull',
      rarity: 15,
      category: 'Jewels',
      drop: {
        monsters: [
          {
            name: 'Sarcophagus',
            locations: ['Forest of Beginnings', 'Leon Karnak'],
            condition:
              'Can only be obtained once per day, unless cheats are used',
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        matk: 60,
        mdef: 195,
      },
    },
    {
      name: 'Magic Crystal',
      rarity: 4,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Airror',
            locations: ['Maya Road'],
          },
          {
            name: 'Flare Mage',
            locations: ['Rune Prana'],
          },
          {
            name: 'Gaias',
            locations: ['Idra Cave'],
          },
          {
            name: 'Ignis',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Little Emperor',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Little Mage',
            locations: ['Forest of Beginnings', 'Idra Cave'],
          },
          {
            name: 'Ice Wizard',
            locations: ['Rune Prana'],
          },
          {
            name: 'Little Wizard',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Sarcophagus',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Spirit',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Tundra',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 27,
      statInfo: {
        matk: 5,
        mdef: 1,
      },
    },
    {
      name: 'Dark Crystal',
      rarity: 3,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Dark Slime',
            locations: ['Floating Empire'],
          },
          {
            name: 'Spirit',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        str: 3,
        vit: 3,
      },
    },
    {
      name: 'Fire Crystal',
      rarity: 7,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Ignis',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Red',
            locations: ['Autumn Road'],
          },
          {
            name: 'Rouge',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        atk: 5,
      },
    },
    {
      name: 'Earth Crystal',
      rarity: 8,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Gaias',
            locations: ['Idra Cave'],
          },
          {
            name: 'Olive',
            locations: ['Rune Prana'],
          },
          {
            name: 'Yellow',
            locations: ['Sercerezo Hill'],
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        def: 5,
      },
    },
    {
      name: 'Love Crystal',
      rarity: 9,
      category: 'Crystals',
      drop: {},
      level: 1,
      difficulty: 50,
      statInfo: {
        drainAtk: 0.03,
      },
    },
    {
      name: 'Wind Crystal',
      rarity: 10,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Airror',
            locations: ['Maya Road'],
          },
          {
            name: 'Emerald',
            locations: ['Rune Prana Floor 7'],
          },
          {
            name: 'Green',
            locations: ['Maya Road', 'World of Fields'],
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        mdef: 5,
      },
    },
    {
      name: 'Water Crystal',
      rarity: 11,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Blue',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Marin',
            locations: ['Rune Prana Floor 7'],
          },
          {
            name: 'Tundra',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        matk: 5,
      },
    },
    {
      name: 'Light Crystal',
      rarity: 12,
      category: 'Crystals',
      drop: {},
      level: 1,
      difficulty: 25,
      statInfo: {
        vit: 3,
        int: 3,
      },
    },
    {
      name: 'Small Crystal',
      rarity: 13,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Dead Tree',
            locations: ['Yokmir Forest', 'Rune Prana Floor 7'],
          },
          {
            name: 'Flare Mage',
            locations: ['Rune Prana'],
          },
          {
            name: 'Ice Wizard',
            locations: ['Rune Prana Floor 5'],
          },
          {
            name: 'Little Wizard',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Olive',
            locations: ['Rune Prana'],
          },
          {
            name: 'Ragnarok',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        atk: 80,
      },
    },
    {
      name: 'Big Crystal',
      rarity: 13,
      category: 'Crystals',
      drop: {},
      level: 1,
      difficulty: 83,
      statInfo: {
        atk: 40,

        matk: 40,
      },
    },
    {
      name: 'Rune Crystal',
      rarity: 14,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Olive',
            locations: ['Rune Prana'],
          },
          {
            name: 'Rouge',
            locations: ['Rune Prana'],
          },
          {
            name: 'Ragnarok',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 89,
      statInfo: {
        matk: 100,
      },
    },
    {
      name: 'Electro Crystal',
      rarity: 15,
      category: 'Crystals',
      drop: {
        monsters: [
          {
            name: 'Bane Dragon',
            locations: ['Rune Prana Floor 1'],
          },
        ],
      },
      level: 1,
      difficulty: 93,
      statInfo: {
        atk: 60,

        matk: 150,
        mdef: -5,

        parAtk: 0.35,
      },
    },
    {
      name: 'Stick',
      rarity: 0,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Chipsqueek',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Orc',
            locations: ['Summer Area', 'Yokmir Forest'],
          },
          {
            name: 'Orc Archer',
            locations: ['Summer Area', 'Yokmir Forest'],
          },
          {
            name: 'High Orc',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Orc Hunter',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Weagle',
            locations: ['Water Ruins'],
          },
          {
            name: 'Ghost',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Ghost Ray',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Blackbird',
            locations: ['Maya Road', 'Rune Prana'],
          },
        ],
      },
      level: 1,
      difficulty: 2,
      statInfo: {
        atk: 2,
      },
    },
    {
      name: 'Insect Horn',
      rarity: 1,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Beetle',
            locations: ['Selphia Plain', 'Yokmir Forest'],
          },
        ],
      },
      level: 1,
      difficulty: 7,
      statInfo: {
        atk: 3,
      },
    },
    {
      name: 'Plant Stem',
      rarity: 3,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Flower Blossom',
            locations: ['Sercerezo Hill'],
          },
          {
            name: 'Flower Crystal',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Flower Lily',
            locations: ['Autumn Road'],
          },
          {
            name: 'Flower Lion',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Leaf Ball',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Planchoa',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 28,
      statInfo: {
        atk: 3,

        matk: 3,
      },
    },
    {
      name: "Bull's Horn",
      rarity: 7,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Buffaloo',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 36,
      statInfo: {
        atk: 7,
        def: 1,
      },
    },
    {
      name: 'Moving Branch',
      rarity: 9,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Dead Tree',
            locations: ['Yokmir Forest', 'Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        atk: -10,

        matk: 200,
      },
    },
    {
      name: 'Rigid Horn',
      rarity: 10,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Heracles',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 52,
      statInfo: {
        atk: 15,

        crit: 0.01,
      },
    },
    {
      name: 'Thick Stick',
      rarity: 12,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Ghost Ray',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Gigantes',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 65,
      statInfo: {
        atk: 34,
      },
    },
    {
      name: 'Devil Horn',
      rarity: 13,
      category: 'Sticks and Stems',
      drop: {
        monsters: [
          {
            name: 'Arch-Demon',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Little Mage',
            locations: ['Forest of Beginnings', 'Idra Cave'],
          },
          {
            name: 'Minotaur',
            locations: ['Idra Cave'],
          },
          {
            name: 'Typhoon',
            locations: ['Sercerezo Hill'],
            condition: 'Can only be obtained during typhoons',
          },
        ],
      },
      level: 1,
      difficulty: 86,
      statInfo: {
        atk: 55,

        matk: 50,
      },
    },
    {
      name: 'Glue',
      rarity: 5,
      category: 'Liquids',
      drop: {
        monsters: [
          {
            name: 'Goblin',
            locations: ['Water Ruins'],
          },
          {
            name: 'High Orc',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Rider Orc',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Hobgoblin',
            locations: ['Idra Cave'],
          },
          {
            name: 'Ogre Viking',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Orc Viking',
            locations: ['Sechs Territory'],
          },
          {
            name: 'High Ogre Viking',
            locations: ['Rune Prana Floor 3'],
          },
        ],
      },
      level: 1,
      difficulty: 26,
      statInfo: {
        atk: 1,
        def: 2,

        mdef: 2,
      },
    },
    {
      name: 'Devil Blood',
      rarity: 9,
      category: 'Liquids',
      drop: {
        monsters: [
          {
            name: 'Arch-Demon',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Baal',
            locations: ['Rune Prana Floor 5'],
          },
          {
            name: 'Blood Panther',
            locations: ['Floating Empire'],
          },
          {
            name: 'Chimera',
            locations: ['Water Ruins'],
          },
          {
            name: 'Daemon',
            locations: ['Idra Cave'],
          },
          {
            name: 'Typhoon',
            locations: ['Sercerezo Hill'],
            condition: 'Can only be obtained during typhoons',
          },
        ],
      },
      level: 1,
      difficulty: 39,
      statInfo: {
        matk: 9,

        drainRes: 0.15,
      },
    },
    {
      name: 'Paralysis Poison',
      rarity: 10,
      category: 'Liquids',
      drop: {
        monsters: [
          {
            name: 'Hornet Queen',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 30,
      statInfo: {
        psnAtk: 0.2,
      },
    },
    {
      name: 'Poison King',
      rarity: 14,
      category: 'Liquids',
      drop: {
        monsters: [
          {
            name: 'King Bee',
            locations: ['Rune Prana Floor 2'],
          },
        ],
      },
      level: 1,
      difficulty: 86,
      statInfo: {
        atk: 5,

        matk: 88,

        psnAtk: 0.8,
      },
    },
    {
      name: "Bird's Feather",
      rarity: 2,
      category: 'Feathers',
      drop: {
        monsters: [
          {
            name: 'Cluckadoodle',
            locations: ['Selphia Plain', 'Cluck-Cluck Nest'],
          },
          {
            name: 'Duck',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Mamadoodle',
            locations: ['Cluck-Cluck Nest'],
          },
          {
            name: 'Weagle',
            locations: ['Selphia Plain', 'Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 10,
      statInfo: {
        int: 2,
      },
    },
    {
      name: 'Yellow Feather',
      rarity: 5,
      category: 'Feathers',
      drop: {
        monsters: [
          {
            name: 'Big Duck',
            locations: ['Rune Prana Floor 2'],
          },
        ],
      },
      level: 1,
      difficulty: 90,
      statInfo: {
        int: 130,
      },
    },
    {
      name: "Black Bird's Feather",
      rarity: 10,
      category: 'Feathers',
      drop: {
        monsters: [
          {
            name: 'Blackbird',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        int: 14,
      },
    },
    {
      name: 'Thunderbird Feather',
      rarity: 12,
      category: 'Feathers',
      drop: {
        monsters: [
          {
            name: 'Thunderbird',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 58,
      statInfo: {
        int: 28,
      },
    },
    {
      name: 'Dragon Fin',
      rarity: 15,
      category: 'Feathers',
      drop: {
        monsters: [
          {
            name: 'Aquaticus',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 96,
      statInfo: {
        vit: -10,
        int: 300,
      },
    },
    {
      name: 'Turtle Shell',
      rarity: 2,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Tortas',
            locations: ['Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 15,
      statInfo: {
        def: 4,

        mdef: 1,

        crit: -0.03,
      },
    },
    {
      name: 'Fish Fossil',
      rarity: 3,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Ancient Bone',
            locations: ['Revival Cave'],
          },
          {
            name: 'Octopirate',
            locations: ['Rune Prana Floor 2'],
          },
          {
            name: 'Sealy',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Sky Fish',
            locations: ['Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 20,
      statInfo: {
        matk: 4,
        mdef: 1,
      },
    },
    {
      name: 'Dragon Bones',
      rarity: 8,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Ancient Bone',
            locations: ['Revival Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        def: 10,

        mdef: 10,

        vit: 10,
      },
    },
    {
      name: 'Skull',
      rarity: 9,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Ghost',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Ancient Bone',
            locations: ['Revival Cave'],
          },
          {
            name: 'Captain Goblin',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Goblin Don',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Necro',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 39,
      statInfo: {
        def: 4,
        matk: 8,
        mdef: 5,

        sickAtk: 0.04,
      },
    },
    {
      name: 'Blk. Tortoise Shell',
      rarity: 12,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Fortoise',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 62,
      statInfo: {
        def: 26,

        mdef: 7,
      },
    },
    {
      name: 'Ammonite',
      rarity: 15,
      category: 'Shells and Bones',
      drop: {
        monsters: [
          {
            name: 'Octopirate',
            locations: ['Rune Prana Floor 2'],
          },
        ],
      },
      level: 1,
      difficulty: 92,
      statInfo: {
        def: 135,

        mdef: 82,
        str: -5,
      },
    },
    {
      name: 'Round Stone',
      rarity: 4,
      category: 'Stones',
      drop: {
        fishing: [
          {
            location: ['Yokmir Forest'],
            area: 'Waterfall',
          },
        ],
      },
      level: 1,
      difficulty: 25,
      statInfo: {
        atk: 5,

        crit: 0.05,
      },
    },
    {
      name: 'Tiny Golem Stone',
      rarity: 9,
      category: 'Stones',
      drop: {
        monsters: [
          {
            name: 'Little Golem',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 38,
      statInfo: {
        def: 8,

        crit: 0.02,
      },
    },
    {
      name: 'Golem Stone',
      rarity: 12,
      category: 'Stones',
      drop: {
        monsters: [
          {
            name: 'Golem',
            locations: ['Floating Empire'],
          },
          {
            name: 'Sechs Golem',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 53,
      statInfo: {
        def: 15,

        crit: 0.03,
      },
    },
    {
      name: 'Golem Tablet',
      rarity: 13,
      category: 'Stones',
      drop: {
        monsters: [
          {
            name: 'Sechs Golem',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 30,

        crit: 0.05,
      },
    },
    {
      name: 'Golem Spirit Stone',
      rarity: 14,
      category: 'Stones',
      drop: {
        monsters: [
          {
            name: 'Guardian',
            locations: ['Rune Prana Floor 6'],
          },
        ],
      },
      level: 1,
      difficulty: 85,
      statInfo: {
        def: 105,

        crit: 0.06,
      },
    },
    {
      name: 'Tablet of Truth',
      rarity: 15,
      category: 'Stones',
      drop: {
        monsters: [
          {
            name: 'G Golem',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        atk: 50,
        def: 160,
        matk: 20,
        mdef: -15,

        crit: 0.1,
      },
    },
    {
      name: 'Yarn',
      rarity: 1,
      category: 'Strings',
      drop: {},
      level: 1,
      difficulty: 4,
      statInfo: {
        def: 1,
        matk: 1,
      },
    },
    {
      name: 'Old Bandage',
      rarity: 2,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Gangster Goblin',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Goblin',
            locations: ['Water Ruins'],
          },
          {
            name: 'Goblin Archer',
            locations: ['Water Ruins'],
          },
          {
            name: 'Goblin Pirate',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 11,
      statInfo: {
        matk: 2,
        mdef: 1,
      },
    },
    {
      name: "Ambrosia's Thorns",
      rarity: 2,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Ambrosia',
            locations: ['Yokmir Forest', 'Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 30,
      statInfo: {
        atk: 7,

        matk: 7,

        slpAtk: 0.1,
      },
    },
    {
      name: "Spider's Thread",
      rarity: 4,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Hell Spider',
            locations: ['Floating Empire'],
          },
          {
            name: 'Spider',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 18,
      statInfo: {
        atk: 2,

        matk: 2,

        parAtk: 0.05,
      },
    },
    {
      name: 'Puppetry Strings',
      rarity: 6,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Marionetta',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        atk: 5,

        matk: 8,

        parAtk: 0.05,
        sealAtk: 0.15,
      },
    },
    {
      name: 'Vine',
      rarity: 6,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Flower Lion',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 30,
      statInfo: {
        matk: 7,

        sealAtk: 0.04,
      },
    },
    {
      name: 'Scorpion Tail',
      rarity: 7,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Death Stalker',
            locations: ['Sechs Territory'],
          },
          {
            name: "Heaven's Scissors",
            locations: ['Rune Prana Floor 5'],
          },
          {
            name: 'Scorpion',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 30,
      statInfo: {
        atk: 5,

        psnAtk: 0.08,
      },
    },
    {
      name: 'Strong Vine',
      rarity: 10,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Flower Blossom',
            locations: ['Sercerezo Hill'],
          },
          {
            name: 'Flower Crystal',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Flower Lily',
            locations: ['Autumn Road'],
          },
          {
            name: 'Planchoa',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 44,
      statInfo: {
        matk: 12,

        sealAtk: 0.1,
      },
    },
    {
      name: 'Pretty Thread',
      rarity: 12,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Hell Spider',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 52,
      statInfo: {
        atk: 2,

        matk: 16,

        parAtk: 0.25,
      },
    },
    {
      name: 'Chimera Tail',
      rarity: 15,
      category: 'Strings',
      drop: {
        monsters: [
          {
            name: 'Chimera 2',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        atk: 200,

        matk: -10,

        psnAtk: 0.5,
        parAtk: 0.5,
      },
    },
    {
      name: 'Arrowhead',
      rarity: 0,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Goblin Archer',
            locations: ['Water Ruins'],
          },
          {
            name: 'Orc Archer',
            locations: ['Summer Area', 'Yokmir Forest'],
          },
          {
            name: 'Orc Hunter',
            locations: ['Yokmir Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 3,
      statInfo: {
        str: 1,
      },
    },
    {
      name: 'Blade Shard',
      rarity: 2,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Goblin',
            locations: ['Water Ruins'],
          },
          {
            name: 'Rider Orc',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Hobgoblin',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 9,
      statInfo: {
        atk: 2,
      },
    },
    {
      name: 'Broken Hilt',
      rarity: 5,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Gobble Box',
            locations: ['Randomly Spawned'],
          },
          {
            name: 'Monster Box',
            locations: ['Randomly Spawned'],
          },
        ],
      },
      level: 1,
      difficulty: 21,
      statInfo: {
        def: 2,

        psnRes: 0.05,
        sealRes: 0.05,
        parRes: 0.05,
        slpRes: 0.05,
        ftgRes: 0.05,
        sickRes: 0.05,
      },
    },
    {
      name: 'Broken Box',
      rarity: 8,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Gobble Box',
            locations: ['Randomly Spawned'],
          },
        ],
      },
      level: 1,
      difficulty: 44,
      statInfo: {
        def: 4,

        psnRes: 0.1,
        sealRes: 0.1,
        parRes: 0.1,
        slpRes: 0.1,
        ftgRes: 0.1,
        sickRes: 0.05,
      },
    },
    {
      name: 'Hammer Piece',
      rarity: 9,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Gigantes',
            locations: ['Floating Empire'],
          },
          {
            name: 'Hammer Troll',
            locations: ['Maya Road'],
          },
          {
            name: 'Minotaur',
            locations: ['Idra Cave'],
          },
          {
            name: 'Minotaur King',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 37,
      statInfo: {
        def: 4,

        str: 6,

        diz: 1,
      },
    },
    {
      name: 'Shoulder Piece',
      rarity: 11,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Ogre Viking',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Orc Viking',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 45,
      statInfo: {
        def: 11,

        knockAtk: 0.08,
      },
    },
    {
      name: 'Rusty Screw',
      rarity: 11,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Sechs Tank',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 57,
      statInfo: {
        matk: 25,
        mdef: -2,
      },
    },
    {
      name: 'Shiney Screw',
      rarity: 12,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Sechs Tank',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 30,
        matk: 40,
        mdef: 10,
      },
    },
    {
      name: 'Glistening Blade',
      rarity: 12,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Faust',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 66,
      statInfo: {
        atk: 38,
      },
    },
    {
      name: 'Great Hammer Shard',
      rarity: 12,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Baal',
            locations: ['Rune Prana Floor 5'],
          },
        ],
      },
      level: 1,
      difficulty: 60,
      statInfo: {
        str: 30,

        diz: 2,
      },
    },
    {
      name: 'Left Rock Shard',
      rarity: 14,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Sano',
            locations: ['Forest of Beginnings', 'Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        def: 120,

        mdef: 35,

        psnRes: 0.06,
        sealRes: 0.06,
        parRes: 0.06,
        slpRes: 0.06,
        ftgRes: 0.06,
        sickRes: 0.06,
        faintRes: 0.01,
        drainRes: 0.01,
      },
    },
    {
      name: 'Right Rock Shard',
      rarity: 14,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Uno',
            locations: ['Forest of Beginnings', 'Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        def: 35,

        mdef: 120,

        dizRes: 0.05,
        critRes: 0.03,
        knockRes: 0.15,
      },
    },
    {
      name: 'MTGU Plate',
      rarity: 14,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Armoured Tank+',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 8,

        ftgRes: 0.08,
        sickRes: 0.08,
      },
    },
    {
      name: "Pirate's Armour",
      rarity: 14,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'High Ogre Viking',
            locations: ['Rune Prana Floor 3'],
          },
        ],
      },
      level: 1,
      difficulty: 84,
      statInfo: {
        def: 83,

        knock: 0.15,
      },
    },
    {
      name: 'Broken Ice Wall',
      rarity: 15,
      category: 'Shards',
      drop: {
        monsters: [
          {
            name: 'Death Wall',
            locations: ['Rune Prana Floor 6'],
          },
        ],
      },
      level: 1,
      difficulty: 96,
      statInfo: {
        atk: 105,
        def: 4,
        matk: 95,

        stun: 0.25,
        slpRes: 0.1,
      },
    },
    {
      name: 'Fur (S)',
      rarity: 0,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'King Wooly',
            locations: ['Yokmir Cave', 'Autumn Road'],
          },
          {
            name: 'Marionetta',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Shmooly',
            locations: ['Spring Area'],
          },
          {
            name: 'Wooly',
            locations: ['Selphia Plain', 'Summer Area'],
          },
        ],
      },
      level: 1,
      difficulty: 1,
      statInfo: {
        vit: 1,

        dizRes: 0.01,
      },
    },
    {
      name: 'Fur',
      rarity: 1,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Blood Panther',
            locations: ['Floating Empire'],
          },
          {
            name: 'Chipsqueek',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Hinoe',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Kinoto',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Leoplicant',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Malm Tiger',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Palm Cat',
            locations: ['Autumn Road', 'Delirium Lava Ruins'],
          },
          {
            name: 'Thunderbolt',
            locations: ['Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 8,
      statInfo: {
        def: 2,

        mdef: 1,

        dizRes: 0.02,
      },
    },
    {
      name: 'Yellow Down',
      rarity: 3,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Big Duck',
            locations: ['Rune Prana Floor 2'],
          },
          {
            name: 'Duck',
            locations: ['Selphia Plain'],
          },
        ],
      },
      level: 1,
      difficulty: 17,
      statInfo: {
        def: 2,

        mdef: 2,

        dizRes: 0.05,
      },
    },
    {
      name: 'Quality Fur',
      rarity: 4,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Chipsqueek',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Hinoe',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Hunter Wolf',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Kinoto',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Leoplicant',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Malm Tiger',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Shadow Panther',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Silver Wolf',
            locations: ['Yokmir Cave', 'Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 23,
      statInfo: {
        def: 3,

        mdef: 2,

        dizRes: 0.1,
      },
    },
    {
      name: 'Lightning Mane',
      rarity: 5,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Thunderbolt',
            locations: ['Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 35,
      statInfo: {
        def: 7,

        mdef: 6,

        vit: 4,

        dizRes: 0.2,
      },
    },
    {
      name: 'Quality Puffy Fur',
      rarity: 6,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Furpy',
            locations: ['Autumn Road'],
          },
        ],
      },
      level: 1,
      difficulty: 36,
      statInfo: {
        def: 5,

        mdef: 3,

        dizRes: 0.08,
      },
    },
    {
      name: 'Fur (M)',
      rarity: 1,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Marionetta',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Shmooly',
            locations: ['Spring Area'],
          },
        ],
      },
      level: 1,
      difficulty: 35,
      statInfo: {
        def: 5,

        mdef: 3,

        dizRes: 0.1,
      },
    },
    {
      name: 'Wooly Furball',
      rarity: 9,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'King Wooly',
            locations: ['Yokmir Cave', 'Autumn Road'],
          },
          {
            name: 'Shmooly',
            locations: ['Spring Area'],
          },
        ],
      },
      level: 1,
      difficulty: 41,
      statInfo: {
        def: 8,

        mdef: 4,

        dizRes: 0.16,
        slpAtk: 0.01,
      },
    },
    {
      name: 'Fur (L)',
      rarity: 10,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Shmooly',
            locations: ['Spring Area'],
          },
        ],
      },
      level: 1,
      difficulty: 52,
      statInfo: {
        def: 10,

        mdef: 5,

        dizRes: 0.25,
        slpAtk: 0.03,
      },
    },
    {
      name: 'Penguin Down',
      rarity: 11,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Emperor Penguin',
            locations: ['Sechs Territory', 'Fall and Winter Area'],
          },
        ],
      },
      level: 1,
      difficulty: 66,
      statInfo: {
        def: 30,

        mdef: 8,

        dizRes: 0.18,
      },
    },
    {
      name: 'Red Lion Fur',
      rarity: 15,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Hinoe',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 92,
      statInfo: {
        atk: 10,
        def: 105,

        mdef: 35,

        dizRes: 0.2,
      },
    },
    {
      name: 'Blue Lion Fur',
      rarity: 15,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Kinoto',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 92,
      statInfo: {
        def: 35,
        matk: 10,
        mdef: 105,

        dizRes: 0.2,
      },
    },
    {
      name: 'Chest Hair',
      rarity: 15,
      category: 'Furs',
      drop: {
        monsters: [
          {
            name: 'Greater Demon',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 91,
      statInfo: {
        atk: 25,
        def: 110,

        mdef: 60,

        int: -5,
        dizRes: 0.25,
      },
    },
    {
      name: 'Spore',
      rarity: 1,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Big Muck',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Tricky Muck',
            locations: ['Autumn Road', 'Delirium Lava Ruins'],
          },
          {
            name: 'Death Fungus',
            locations: ['Selphia Plain'],
            condition: 'Fridays',
          },
        ],
      },
      level: 1,
      difficulty: 8,
      statInfo: {
        matk: 2,
      },
    },
    {
      name: 'Fairy Dust',
      rarity: 3,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Dark Fairy',
            locations: ['Floating Empire'],
          },
          {
            name: 'Fairy',
            locations: ['Selphia Plain'],
          },
        ],
      },
      level: 1,
      difficulty: 19,
      statInfo: {
        matk: 5,
      },
    },
    {
      name: 'Gunpowder',
      rarity: 5,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Orc Archer',
            locations: ['Yokmir Forest'],
          },
          {
            name: 'Goblin Sniper',
            locations: ['Idra Cave'],
          },
          {
            name: 'Orc Hunter',
            locations: ['Yokmir Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 27,
      statInfo: {
        atk: 1,

        matk: 5,
      },
    },
    {
      name: 'Poison Powder',
      rarity: 6,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Tricky Muck',
            locations: ['Autumn Road', 'Delirium Lava Ruins'],
          },
          {
            name: 'Death Fungus',
            locations: ['Selphia Plain'],
            condition: 'Fridays',
          },
        ],
      },
      level: 1,
      difficulty: 20,
      statInfo: {
        matk: 2,
        mdef: 2,

        psnAtk: 0.05,
      },
    },
    {
      name: 'Holy Spore',
      rarity: 7,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Death Fungus',
            locations: ['Selphia Plain'],
            condition: 'Fridays',
          },
        ],
      },
      level: 1,
      difficulty: 33,
      statInfo: {
        matk: 10,

        psnAtk: 0.33,
        sealAtk: 0.33,
        drainRes: 0.5,
      },
    },
    {
      name: 'Root',
      rarity: 8,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Flower Blossom',
            locations: ['Sercerezo Hill'],
          },
          {
            name: 'Flower Crystal',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Flower Lily',
            locations: ['Autumn Road'],
          },
          {
            name: 'Planchoa',
            locations: ['Maya Road'],
          },
          {
            name: 'Rafflesia',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 35,
      statInfo: {
        matk: 8,
      },
    },
    {
      name: 'Magic Powder',
      rarity: 9,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Little Mage',
            locations: ['Forest of Beginnings', 'Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        matk: 10,
      },
    },
    {
      name: 'Mysterious Powder',
      rarity: 10,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: '???',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 55,
      statInfo: {
        matk: 15,

        ftgAtk: 0.1,
        sickAtk: 0.05,
      },
    },
    {
      name: 'Earth Dragon Ash',
      rarity: 11,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Terraclone',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        def: 33,

        mdef: 33,

        vit: 5,
      },
    },
    {
      name: 'Magic',
      rarity: 11,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Elemental Emperor',
            locations: ['Rune Prana Floor 6'],
          },
          {
            name: 'Flare Mage',
            locations: ['Rune Prana'],
          },
          {
            name: 'Little Wizard',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Ice Wizard',
            locations: ['Rune Prana'],
          },
        ],
      },
      level: 1,
      difficulty: 53,
      statInfo: {
        matk: 20,
      },
    },
    {
      name: 'Fire Dragon Ash',
      rarity: 12,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Fiergaenger',
            locations: ['Maya Road'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        atk: 80,

        str: 10,
      },
    },
    {
      name: 'Fairy Elixir',
      rarity: 12,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Dark Fairy',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 67,
      statInfo: {
        matk: 40,
      },
    },
    {
      name: 'Water Dragon Ash',
      rarity: 13,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Aquameleon',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        matk: 80,

        int: 10,
      },
    },
    {
      name: "Turnip's Miracle",
      rarity: 14,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Turnip Ghost',
            locations: ['Rune Prana Floor 3'],
          },
        ],
      },
      level: 1,
      difficulty: 85,
      statInfo: {
        mdef: 99,
      },
    },
    {
      name: 'Melody Bottle',
      rarity: 15,
      category: 'Powders and Spores',
      drop: {
        monsters: [
          {
            name: 'Siren',
            locations: ['Rune Prana Floor 5'],
          },
        ],
      },
      level: 1,
      difficulty: 94,
      statInfo: {
        atk: 30,
        def: -10,
        matk: 170,
        mdef: 30,

        psnAtk: 0.1,
        sealAtk: 0.1,
        parAtk: 0.1,
        slpAtk: 0.1,
        ftgAtk: 0.1,
        sickAtk: 0.1,
        faintAtk: 0.01,
      },
    },
    {
      name: 'Cheap Cloth',
      rarity: 0,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'High Orc',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Orc',
            locations: ['Summer Area', 'Yokmir Forest'],
          },
          {
            name: 'Rider Orc',
            locations: ['Yokmir Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 2,
      statInfo: {
        def: 1,

        critRes: 0.01,
      },
    },
    {
      name: 'Insect Carapace',
      rarity: 1,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Ant',
            locations: [
              'Summer Area',
              'Fall and Winter Area',
              'Yokmir Forest',
              'Yokmir Cave',
              'Revival Cave',
            ],
          },
          {
            name: 'Beetle',
            locations: ['Yokmir Forest', 'Selphia Plain'],
          },
          {
            name: 'Killer Ant',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Hornet',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Scorpion',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Ant Queen',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 7,
      statInfo: {
        def: 1,

        psnRes: 0.15,
      },
    },
    {
      name: 'Ghost Hood',
      rarity: 4,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Faust',
            locations: ['Floating Empire'],
          },
          {
            name: 'Ghost',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Ghost Ray',
            locations: ['Obsidian Mansion'],
          },
          {
            name: 'Necro',
            locations: ['Idra Cave'],
          },
          {
            name: 'Onion Ghost',
            locations: ['Sercerezo Hill'],
          },
          {
            name: 'Tomato Ghost',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 24,
      statInfo: {
        def: 3,

        sealRes: 0.3,
      },
    },
    {
      name: 'Pretty Carapace',
      rarity: 6,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Ant',
            locations: [
              'Summer Area',
              'Fall and Winter Area',
              'Yokmir Forest',
              'Yokmir Cave',
              'Revival Cave',
            ],
          },
          {
            name: 'Ant Queen',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Beetle',
            locations: ['Yokmir Forest', 'Selphia Plain'],
          },
          {
            name: 'Death Stalker',
            locations: ['Sechs Territory'],
          },
          {
            name: "Heaven's Scissors",
            locations: ['Rune Prana Floor 5'],
          },
          {
            name: 'Heracles',
            locations: ['Maya Road'],
          },
          {
            name: 'Hornet',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Hornet Queen',
            locations: ['Maya Road'],
          },
          {
            name: 'Killer Ant',
            locations: ['Yokmir Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 35,
      statInfo: {
        def: 3,

        sealRes: 0.05,
        parRes: 0.25,
      },
    },
    {
      name: 'Quality Cloth',
      rarity: 7,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Gangster Goblin',
            locations: ['Delirium Lava Ruins'],
          },
          {
            name: 'Goblin Pirate',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 32,
      statInfo: {
        def: 5,

        critRes: 0.05,
      },
    },
    {
      name: 'Quality Worn Cloth',
      rarity: 8,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Onionger',
            locations: ['Rune Prana Floor 1'],
          },
        ],
      },
      level: 1,
      difficulty: 83,
      statInfo: {
        def: 52,

        mdef: 35,

        dizRes: 0.1,
        critRes: 0.1,
        sealRes: 0.3,
      },
    },
    {
      name: 'Silk Cloth',
      rarity: 9,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Captain Goblin',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Hobgoblin',
            locations: ['Idra Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 38,
      statInfo: {
        def: 9,

        critRes: 0.04,
      },
    },
    {
      name: "Giant's Glove",
      rarity: 10,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Hammer Troll',
            locations: ['Maya Road'],
          },
          {
            name: 'Master Giant',
            locations: ['Floating Empire'],
          },
          {
            name: 'Master Troll',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 43,
      statInfo: {
        atk: 3,
        def: 8,

        critRes: 0.06,
      },
    },
    {
      name: "Blue Giant's Glove",
      rarity: 11,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Titan',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 54,
      statInfo: {
        atk: 6,
        def: 12,

        critRes: 0.08,
      },
    },
    {
      name: 'Ancient Orc Cloth',
      rarity: 14,
      category: 'Cloths and Skins',
      drop: {
        monsters: [
          {
            name: 'Death Orc',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 90,
      statInfo: {
        def: 96,

        mdef: 48,

        dizRes: 0.15,
        critRes: 0.15,
        sealRes: 0.3,
      },
    },
    {
      name: 'Insect Jaw',
      rarity: 0,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Ant',
            locations: [
              'Summer Area',
              'Fall and Winter Area',
              'Yokmir Forest',
              'Yokmir Cave',
              'Revival Cave',
            ],
          },
          {
            name: 'Hornet',
            locations: ['Yokmir Cave'],
          },
          {
            name: 'Hornet Queen',
            locations: ['Maya Road'],
          },
          {
            name: 'Killer Ant',
            locations: ['Yokmir Cave'],
          },
        ],
      },
      level: 1,
      difficulty: 4,
      statInfo: {
        atk: 2,
      },
    },
    {
      name: 'Panther Claw',
      rarity: 4,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Shadow Panther',
            locations: ['Obsidian Mansion'],
          },
        ],
      },
      level: 1,
      difficulty: 20,
      statInfo: {
        atk: 4,
      },
    },
    {
      name: 'Wolf Fang',
      rarity: 5,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Silver Wolf',
            locations: ['Yokmir Cave', 'Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 30,
      statInfo: {
        atk: 6,
      },
    },
    {
      name: 'Palm Claw',
      rarity: 6,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Leoplicant',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Palm Cat',
            locations: ['Autumn Road'],
          },
        ],
      },
      level: 1,
      difficulty: 32,
      statInfo: {
        atk: 8,
      },
    },
    {
      name: "Giant's Nail",
      rarity: 7,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Hammer Troll',
            locations: ['Maya Road'],
          },
          {
            name: 'Titan',
            locations: ['Sechs Territory'],
          },
          {
            name: 'Troll',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        atk: 10,
      },
    },
    {
      name: "Chimera's Claw",
      rarity: 7,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Chimera',
            locations: ['Water Ruins'],
            condition:
              'Can only be obtained once per day, unless cheats are used',
          },
        ],
      },
      level: 1,
      difficulty: 45,
      statInfo: {
        atk: 15,

        matk: 2,

        psnAtk: 0.05,
        parAtk: 0.05,
      },
    },
    {
      name: 'Ivory Tusk',
      rarity: 8,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Elefun',
            locations: ['Spring Area', 'Idra Cave'],
          },
          {
            name: 'Mammoo',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        atk: 15,
        def: -5,
        matk: 1,
      },
    },
    {
      name: "Big Gaint's Nail",
      rarity: 9,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Master Troll',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 90,
      statInfo: {
        atk: 150,
      },
    },
    {
      name: 'Unbroken Ivory Tusk',
      rarity: 10,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Mammoo',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 55,
      statInfo: {
        atk: 19,

        matk: 2,
      },
    },
    {
      name: 'Scorpion Pincer',
      rarity: 11,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Death Stalker',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 60,
      statInfo: {
        atk: 30,
        def: -5,
      },
    },
    {
      name: 'Cheap Propeller',
      rarity: 11,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Hover Soldier',
            locations: ['Floating Empire'],
          },
          {
            name: 'Hover Warrior',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 62,
      statInfo: {
        atk: 29,
        def: -2,
      },
    },
    {
      name: 'Gold Wolf Fang',
      rarity: 11,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Hunter Wolf',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 61,
      statInfo: {
        atk: 26,
      },
    },
    {
      name: 'Quality Propeller',
      rarity: 12,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Hover Warrior',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 69,
      statInfo: {
        atk: 40,
        def: -5,
      },
    },
    {
      name: 'Magic Claw',
      rarity: 12,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Blood Panther',
            locations: ['Floating Empire'],
          },
        ],
      },
      level: 1,
      difficulty: 74,
      statInfo: {
        atk: 42,

        matk: 15,
      },
    },
    {
      name: 'Dragon Fang',
      rarity: 13,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Black Dragon',
            locations: ['Rune Prana Floor 7'],
          },
          {
            name: 'Blue Dragon',
            locations: ['Rune Prana Floor 6'],
          },
          {
            name: 'Fiersome',
            locations: ['Sharance Maze'],
          },
          {
            name: 'Green Dragon',
            locations: ['Rune Prana Floor 1'],
          },
          {
            name: 'Grimoire',
            locations: ['Leon Karnak'],
          },
          {
            name: 'Little Dragon',
            locations: ['Floating Empire'],
          },
          {
            name: 'Pink Dragon',
            locations: ['Rune Prana Floor 6'],
          },
          {
            name: 'Red Dragon',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Terrable',
            locations: ['Sharance Maze'],
          },
          {
            name: 'Ventuswill',
            locations: ['Sharance Maze'],
          },
          {
            name: 'Yellow Dragon',
            locations: ['Rune Prana Floor 6'],
          },
        ],
      },
      level: 1,
      difficulty: 80,
      statInfo: {
        atk: 60,
      },
    },
    {
      name: 'Malm Claw',
      rarity: 14,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Leoplicant',
            locations: ['Rune Prana Floor 4'],
          },
          {
            name: 'Malm Tiger',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        atk: 121,
      },
    },
    {
      name: "Queen's Jaw",
      rarity: 14,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Ant Queen',
            locations: ['Rune Prana Floor 4'],
          },
        ],
      },
      level: 1,
      difficulty: 89,
      statInfo: {
        atk: 100,
        def: 10,
        matk: 40,
        mdef: 10,
      },
    },
    {
      name: 'Dangerous Scissors',
      rarity: 14,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: "Heaven's Scissors",
            locations: ['Rune Prana Floor 5'],
          },
        ],
      },
      level: 1,
      difficulty: 90,
      statInfo: {
        atk: 195,
        def: -50,
      },
    },
    {
      name: 'Wind Dragon Tooth',
      rarity: 15,
      category: 'Claws and Fangs',
      drop: {
        monsters: [
          {
            name: 'Ventuswill',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 98,
      statInfo: {
        atk: 180,

        matk: 180,
      },
    },
    {
      name: 'Wet Scale',
      rarity: 11,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Sealy',
            locations: ['Sechs Territory'],
          },
        ],
      },
      level: 1,
      difficulty: 58,
      statInfo: {
        vit: 22,
      },
    },
    {
      name: 'Dragon Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Green Dragon',
            locations: ['Rune Prana Floor 1', 'Rune Prana Floor 7'],
          },
          {
            name: 'Ventuswill',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        str: 10,
        vit: 140,
      },
    },
    {
      name: 'Crimson Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Red Dragon',
            locations: ['Rune Prana Floor 4', 'Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        str: 140,
        vit: 10,
      },
    },
    {
      name: 'Blue Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Blue Dragon',
            locations: ['Rune Prana Floor 6', 'Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        vit: 10,
        int: 140,
      },
    },
    {
      name: 'Glitter Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Yellow Dragon',
            locations: ['Rune Prana Floor 6', 'Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 96,
      statInfo: {
        str: 70,
        vit: 10,
        int: 70,
      },
    },
    {
      name: 'Love Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Pink Dragon',
            locations: ['Rune Prana Floor 6', 'Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        str: 50,
        vit: 50,
        int: 50,
      },
    },
    {
      name: 'Black Scale',
      rarity: 14,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Black Dragon',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 88,
      statInfo: {
        str: 10,
        vit: 70,
        int: 70,
      },
    },
    {
      name: 'Grimoire Scale',
      rarity: 15,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Grimoire',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        str: 50,
        vit: 160,
        int: 50,
      },
    },
    {
      name: 'Firewyrm Scale',
      rarity: 15,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Fiersome',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 96,
      statInfo: {
        str: 300,

        int: -10,
      },
    },
    {
      name: 'Earthwyrm Scale',
      rarity: 15,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Terrable',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 96,
      statInfo: {
        str: -10,
        vit: 300,
        int: -10,
      },
    },
    {
      name: 'Legendary Scale',
      rarity: 15,
      category: 'Scales',
      drop: {
        monsters: [
          {
            name: 'Aquaticus',
            locations: ['Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 90,
      statInfo: {
        drainAtk: 0.1,
      },
    },
    {
      name: 'Double Steel',
      rarity: 5,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Mineral Squeek',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        upgradeEffct: 2,
      },
    },
    {
      name: '10-Fold Steel',
      rarity: 10,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Mineral Squeek',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 95,
      statInfo: {
        upgradeEffct: 8,
      },
    },
    {
      name: 'Glitta Augite',
      rarity: 8,
      category: 'Collectible',
      drop: {
        chopping: [
          {
            name: 'Shining Trees',
          },
        ],
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        effect: 'Increase attack range',
      },
    },
    {
      name: 'Invisible Stone',
      rarity: 5,
      category: 'Collectible',
      drop: {
        condition: 'Small chance from any ore',
      },
      level: 1,
      difficulty: 33,
      statInfo: {
        effect: 'Makes item invisible',
      },
    },
    {
      name: 'Light Ore',
      rarity: 13,
      category: 'Collectible',
      drop: {
        condition: 'Small chance from any ore (high mining level required)',
      },
      level: 1,
      difficulty: 50,
      statInfo: {
        effect: 'Change weapon category',
      },
    },
    {
      name: 'Rune Sphere Shard',
      rarity: 15,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Ethelwill',
            locations: ['Floating Empire'],
          },
          {
            name: 'Ragnarok',
            locations: ['Rune Prana Floor 7'],
          },
        ],
      },
      level: 1,
      difficulty: 99,
      statInfo: {
        str: 120,
        vit: 120,
        int: 120,
      },
    },
    {
      name: 'Shade Stone',
      rarity: 6,
      category: 'Collectible',
      drop: {
        locations: ['Leon Karnak', 'Obsidian Mansion'],

        condition:
          'Area between Leon Karnak and Obsidian Mansion where it goes dark',
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        effect: 'Decrease enemy tolerance on hit',
      },
    },
    {
      name: 'Raccoon Leaf',
      rarity: 10,
      category: 'Collectible',
      drop: {
        locations: [''],
        monsters: [
          {
            name: 'Magnuto',
            locations: ["Demon's Den"],
          },
        ],
      },
      level: 1,
      difficulty: 65,
      statInfo: {
        int: 40,
        effect: 'Increase attack range',
      },
    },
    {
      name: 'Icy Nose',
      rarity: 15,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Crystal Mammoth',
            locations: ['Rune Prana Floor 3'],
          },
        ],
      },
      level: 1,
      difficulty: 92,
      statInfo: {
        atk: 128,

        matk: 90,

        int: -5,
        diz: 1,
        crit: 0.02,
        stun: 0.05,
      },
    },
    {
      name: "Big Bird's Comb",
      rarity: 10,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Mamadoodle',
            locations: ['Cluck-Cluck Nest'],
          },
        ],
      },
      level: 1,
      difficulty: 65,
      statInfo: {
        atk: 22,

        faintRes: 0.5,
      },
    },
    {
      name: 'Rafflesia Petal',
      rarity: 9,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Rafflesia',
            locations: ['Delirium Lava Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 55,
      statInfo: {
        atk: 7,

        matk: 17,

        ftgAtk: 0.2,
        sickAtk: 0.15,
      },
    },
    {
      name: 'Cursed Doll',
      rarity: 6,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Marionetta',
            locations: ['Obsidian Mansion'],
            condition:
              'Can only be obtained once per day, unless cheats are used',
          },
        ],
      },
      level: 1,
      difficulty: 40,
      statInfo: {
        def: 4,

        mdef: 7,

        sealRes: 0.15,
        parRes: 0.15,
        drainRes: 0.15,
      },
    },
    {
      name: "Warrior's Proof",
      rarity: 13,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Captain Goblin',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 77,
      statInfo: {
        str: 58,

        int: 5,
        faintRes: 0.15,
      },
    },
    {
      name: 'Proof of Rank',
      rarity: 13,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Goblin Don',
            locations: ['Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 77,
      statInfo: {
        str: 15,

        int: 48,
        faintRes: 0.15,
      },
    },
    {
      name: 'Throne of the Empire',
      rarity: 14,
      category: 'Collectible',
      drop: {
        monsters: [
          {
            name: 'Ragnarok',
            locations: ['Rune Prana Floor 7'],
            condition:
              'Can only be obtained once per day, unless cheats are used',
          },
        ],
      },
      level: 1,
      difficulty: 97,
      statInfo: {
        int: -5,
        knock: 0.3,
      },
    },
    {
      name: 'White Stone',
      rarity: 13,
      category: 'Collectible',
      drop: {
        locations: ['Sechs Territory'],
        condition: 'Can only be obtained when in a party with spouse and child',
      },
      level: 1,
      difficulty: 30,
    },
    {
      name: 'Boot',
      rarity: 0,
      category: 'Trash',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Can',
      rarity: 0,
      category: 'Trash',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Rare Can',
      rarity: 5,
      category: 'Trash',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Branch',
      rarity: 0,
      category: 'Other',
      drop: {
        monsters: [
          {
            name: 'Blackbird',
            locations: ['Maya Road', 'Rune Prana'],
          },
          {
            name: 'Chipsqueek',
            locations: ['Selphia Plain'],
          },
          {
            name: 'Furpy',
            locations: ['Autumn Road'],
          },
          {
            name: 'Thunderbird',
            locations: ['Floating Empire'],
          },
          {
            name: 'Weagle',
            locations: ['Water Ruins'],
          },
        ],
      },
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Rock',
      rarity: 0,
      category: 'Other',
      drop: {
        monsters: [
          {
            name: 'Sano',
            locations: ['Forest of Beginnings', 'Leon Karnak'],
          },
          {
            name: 'Uno',
            locations: ['Forest of Beginnings', 'Leon Karnak'],
          },
        ],
      },
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Material Stone',
      rarity: 0,
      category: 'Other',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Lumber',
      rarity: 0,
      category: 'Other',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Cabbage',
      rarity: 6,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 37,
      statInfo: {
        int: 6,
      },
    },
    {
      name: 'Pink Turnip',
      rarity: 3,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 21,
      statInfo: {
        str: 4,
      },
    },
    {
      name: 'Pink Melon',
      rarity: 7,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 45,
      statInfo: {
        int: 7,
      },
    },
    {
      name: 'Onion',
      rarity: 6,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 37,
      statInfo: {
        vit: 10,
      },
    },
    {
      name: 'Pumpkin',
      rarity: 3,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 19,
      statInfo: {
        str: 3,
      },
    },
    {
      name: 'Cucumber',
      rarity: 3,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 17,
      statInfo: {
        str: 2,
      },
    },
    {
      name: 'Corn',
      rarity: 4,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 27,
      statInfo: {
        vit: 6,
      },
    },
    {
      name: 'Tomato',
      rarity: 7,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 43,
      statInfo: {
        str: 9,
      },
    },
    {
      name: 'Eggplant',
      rarity: 5,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 33,
      statInfo: {
        str: 7,
      },
    },
    {
      name: 'Yam',
      rarity: 3,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 18,
      statInfo: {
        vit: 5,
      },
    },
    {
      name: 'Potato',
      rarity: 1,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 7,
      statInfo: {
        vit: 2,
      },
    },
    {
      name: 'Carrot',
      rarity: 4,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 7,
      statInfo: {
        vit: 2,
      },
    },
    {
      name: 'Green Pepper',
      rarity: 5,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 31,
      statInfo: {
        str: 6,
      },
    },
    {
      name: 'Spinach',
      rarity: 1,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 9,
      statInfo: {
        matk: 2,
      },
    },
    {
      name: 'Turnip',
      rarity: 0,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 1,
      statInfo: {
        str: 1,
      },
    },
    {
      name: 'Radish',
      rarity: 2,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 12,
      statInfo: {
        vit: 3,
      },
    },
    {
      name: 'Leek',
      rarity: 5,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 35,
      statInfo: {
        matk: 6,
      },
    },
    {
      name: 'Bok Choy',
      rarity: 6,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 36,
      statInfo: {
        matk: 8,
      },
    },
    {
      name: 'Hot-Hot Fruit',
      rarity: 5,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 35,
      statInfo: {
        mdef: 7,

        fireRes: 0.05,
      },
    },
    {
      name: 'Golden Cabbage',
      rarity: 9,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 59,
      statInfo: {
        int: 20,
        faintAtk: 0.01,
      },
    },
    {
      name: 'Golden Pumpkin',
      rarity: 9,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 56,
      statInfo: {
        str: 25,

        faintAtk: 0.01,
      },
    },
    {
      name: 'Golden Potato',
      rarity: 9,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 55,
      statInfo: {
        vit: 30,

        faintAtk: 0.01,
      },
    },
    {
      name: 'Bamboo Sprout',
      rarity: 0,
      category: 'Vegetable',
      drop: {},
      level: 1,
      difficulty: 1,
      statInfo: {
        atk: 1,
      },
    },
    {
      name: 'Mushroom',
      rarity: 0,
      category: 'Mushroom',
      drop: {},
      level: 1,
      difficulty: 0,
    },
    {
      name: 'Grapes',
      rarity: 5,
      category: 'Fruit',
      drop: {},
      level: 1,
      difficulty: 30,
      statInfo: {
        str: 4,
        vit: 4,
      },
    },
    {
      name: 'Apple',
      rarity: 5,
      category: 'Fruit',
      drop: {},
      level: 1,
      difficulty: 32,
      statInfo: {
        str: 4,

        int: 4,
      },
    },
    {
      name: 'Orange',
      rarity: 5,
      category: 'Fruit',
      drop: {},
      level: 1,
      difficulty: 30,
      statInfo: {
        vit: 4,
        int: 4,
      },
    },
    {
      name: 'Strawberry',
      rarity: 4,
      category: 'Fruit',
      drop: {},
      level: 1,
      difficulty: 24,
      statInfo: {
        str: 3,
        vit: 3,
      },
    },
    {
      name: 'Pineapple',
      rarity: 8,
      category: 'Fruit',
      drop: {},
      level: 1,
      difficulty: 50,
      statInfo: {
        str: 15,
      },
    },
    {
      name: 'Toyherb',
      rarity: 0,
      category: 'Plant',
      drop: {
        monsters: [
          {
            name: 'Ambrosia',
            locations: ['Yokmir Forest', 'Sharance Maze'],
          },
        ],
      },
      level: 1,
      difficulty: 1,
      statInfo: {
        vit: 1,

        ftgRes: 0.05,
      },
    },
    {
      name: 'Toyherb',
      rarity: 0,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 1,
      statInfo: {
        vit: 1,

        ftgRes: 0.05,
      },
    },
    {
      name: 'Moondrop Flower',
      rarity: 1,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 10,
      statInfo: {
        int: 1,
      },
    },
    {
      name: 'Elli Leaves',
      rarity: 10,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 60,
    },
    {
      name: 'Pink Cat',
      rarity: 2,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 15,
      statInfo: {
        int: 2,
      },
    },
    {
      name: 'Charm Blue',
      rarity: 3,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 20,
      statInfo: {
        psnAtk: 0.05,
      },
    },
    {
      name: 'Cherry Grass',
      rarity: 3,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 22,
      statInfo: {
        vit: 1,

        slpAtk: 0.01,
      },
    },
    {
      name: 'Lamp Grass',
      rarity: 4,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 28,
      statInfo: {
        int: 3,
      },
    },
    {
      name: 'Blue Crystal',
      rarity: 8,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 53,
      statInfo: {
        matk: 10,
        mdef: 10,

        vit: 1,

        waterRes: 0.05,
      },
    },
    {
      name: 'Emery Flower',
      rarity: 10,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 66,
      statInfo: {
        int: 30,
      },
    },
    {
      name: 'Great Emery Flower',
      rarity: 15,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 95,
      statInfo: {
        int: 80,
      },
    },
    {
      name: 'Ironleaf',
      rarity: 4,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 29,
      statInfo: {
        atk: 4,
      },
    },
    {
      name: '4-Leaf Clover',
      rarity: 4,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 29,
    },
    {
      name: 'Fireflower',
      rarity: 6,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 41,
    },
    {
      name: 'Green Crystal',
      rarity: 8,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 53,
      statInfo: {
        mdef: 20,

        windRes: 0.05,
      },
    },
    {
      name: 'Noel Grass',
      rarity: 6,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 41,
      statInfo: {
        int: 7,
      },
    },
    {
      name: 'Autumn Grass',
      rarity: 5,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 35,
      statInfo: {
        slpRes: 0.06,
      },
    },
    {
      name: 'Pom-Pom Grass',
      rarity: 4,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 28,
      statInfo: {
        psnAtk: 0.03,
        psnRes: 0.05,
      },
    },
    {
      name: 'Red Crystal',
      rarity: 8,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 53,
      statInfo: {
        matk: 20,

        fireRes: 0.05,
      },
    },
    {
      name: 'White Crystal',
      rarity: 8,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 53,
      statInfo: {
        int: 20,
        earthRes: 0.05,
      },
    },
    {
      name: 'Medicinal Herb',
      rarity: 0,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 2,
      statInfo: {
        ftgRes: 0.01,
      },
    },
    {
      name: 'Antidotal Herb',
      rarity: 0,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 8,
      statInfo: {
        psnRes: 0.03,
      },
    },
    {
      name: 'Black Grass',
      rarity: 3,
      category: 'Plant',
      drop: {
        locations: ['Obsidian Mansion', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 23,
    },
    {
      name: 'Orange Grass',
      rarity: 7,
      category: 'Plant',
      drop: {
        locations: ['Sercerezo Hill', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 48,
    },
    {
      name: 'Red Grass',
      rarity: 6,
      category: 'Plant',
      drop: {
        locations: ['Delirium Lava Ruins', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 40,
    },
    {
      name: 'Yellow Grass',
      rarity: 5,
      category: 'Plant',
      drop: {
        locations: ['Autumn Road', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 39,
    },
    {
      name: 'Blue Grass',
      rarity: 0,
      category: 'Plant',
      drop: {
        locations: [
          'Selphia Plain',
          'Yokmir Forest',
          'Revival Cave',
          'Maya Road',
        ],
      },
      level: 1,
      difficulty: 1,
    },
    {
      name: 'Green Grass',
      rarity: 0,
      category: 'Plant',
      drop: {
        locations: [
          'Selphia Farm',
          'Selphia Plain',
          'Revival Cave',
          'Maya Road',
        ],
      },
      level: 1,
      difficulty: 1,
    },
    {
      name: 'Purple Grass',
      rarity: 1,
      category: 'Plant',
      drop: {
        locations: ['Selphia Plain', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 5,
    },
    {
      name: 'Indigo Grass',
      rarity: 4,
      category: 'Plant',
      drop: {
        locations: ['Yokmir Cave', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 29,
    },
    {
      name: 'White Grass',
      rarity: 8,
      category: 'Plant',
      drop: {
        locations: ['Sechs Territory', 'Revival Cave', 'Maya Road'],
      },
      level: 1,
      difficulty: 65,
    },
    {
      name: 'Weeds',
      rarity: 0,
      category: 'Plant',
      drop: {
        locations: [''],
      },
      level: 1,
      difficulty: 1,
    },
    {
      name: 'Withered Weeds',
      rarity: 0,
      category: 'Plant',
      drop: {},
      level: 1,
      difficulty: 1,
      statInfo: {
        vit: -1,
      },
    },
  ],
};
