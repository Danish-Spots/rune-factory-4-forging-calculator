import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';

const routes: Routes = [
  { path: 'materials', component: MaterialTableComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: '**', redirectTo: 'calculator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
