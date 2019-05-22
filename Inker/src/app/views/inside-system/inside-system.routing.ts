import { InsideSystemComponent } from './inside-system.component';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';


const insideRoutes = [{
  path: '', component: InsideSystemComponent,
  children: [

  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(insideRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InsideSystemRouting { }
