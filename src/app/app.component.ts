import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first, Observable, Subject, takeUntil } from 'rxjs';
import { Item, Material } from './models/item.model';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rune-factory-forging-calculator';

  private destroy$ = new Subject<void>();

  constructor(private itemService: ItemService) {}

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.itemService.loadJson().pipe(takeUntil(this.destroy$)).subscribe();
  }
}
