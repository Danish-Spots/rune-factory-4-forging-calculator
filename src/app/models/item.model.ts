export interface Material {
  items: Item[];
}

export interface Item {
  name?: string;
  rarity?: number;
  category?: string;
  drop?: Drop;
  difficulty?: number;
  statInfo?: StatInfo;
  level?: number;
}

export interface Drop {
  locations?: string[];
  monsters?: Monster[];
  other?: Other[];
  fishing?: Fishing[];
  chopping?: Chopping[];
  condition?: string;
}

export interface Chopping {
  name: string;
}

export interface Fishing {
  location: string[];
  area: string;
}

export interface Monster {
  name: string;
  locations: string[];
  condition?: string;
}

export interface Other {
  name: string;
  locations: string[];
}

export interface StatInfo {
  matk?: number;
  def?: number;
  mdef?: number;
  str?: number;
  vit?: number;
  atk?: number;
  drainAtk?: number;
  int?: number;
  parAtk?: number;
  crit?: number;
  drainRes?: number;
  psnAtk?: number;
  sickAtk?: number;
  slpAtk?: number;
  sealAtk?: number;
  psnRes?: number;
  sealRes?: number;
  parRes?: number;
  slpRes?: number;
  ftgRes?: number;
  sickRes?: number;
  diz?: number;
  knockAtk?: number;
  faintRes?: number;
  dizRes?: number;
  critRes?: number;
  knockRes?: number;
  knock?: number;
  stun?: number;
  ftgAtk?: number;
  faintAtk?: number;
  upgradeEffct?: number;
  effect?: string;
  fireRes?: number;
  waterRes?: number;
  windRes?: number;
  earthRes?: number;
}
