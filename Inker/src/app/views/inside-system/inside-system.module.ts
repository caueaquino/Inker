import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideSystemRouting } from './inside-system.routing';

import { InsideSystemComponent } from './inside-system.component';

@NgModule({
  declarations: [
    InsideSystemComponent
  ],
  imports: [
    CommonModule,
    InsideSystemRouting
  ]
})
export class InsideSystemModule { }
