import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, Material } from '../models/item.model';
import { of, Subject, tap } from 'rxjs';
import { materialList } from '../models/items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public items$!: Subject<Item[]>;
  constructor(private http: HttpClient) {}

  public loadJson() {
    this.items$ = new Subject();
    return this.http
      .get<Material>('assets/items-with-null-stats.json')
      .pipe(tap((x) => this.items$.next(x.items)));
  }

  public loadItems() {
    return of(materialList.items);
  }
}
