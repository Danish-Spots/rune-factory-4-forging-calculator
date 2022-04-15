import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, AfterViewInit, OnDestroy {
  links = ['calculator', 'materials'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  private destroy$: Subject<void> = new Subject();

  constructor(private router: Router) {}
  ngOnDestroy(): void {
    this.destroy$.complete();
  }
  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (event) => (this.activeLink = (event as NavigationEnd).url.substring(1))
      );
  }

  ngOnInit(): void {}

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  navigate(link: string) {
    this.activeLink = link;
    this.router.navigate(['/' + link]);
  }
}
