import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', loadChildren: './views/outside-system/outside-system.module#OutsideSystemModule' },
  { path: ':user', loadChildren: './views/inside-system/inside-system.module#InsideSystemModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
