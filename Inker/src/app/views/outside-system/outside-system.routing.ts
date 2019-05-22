import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { OutsideSystemComponent } from './outside-system.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';


const outsideRoutes = [{
    path: '', component: OutsideSystemComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'password-recovery', component: PasswordRecoveryComponent }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(outsideRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OutsideSystemRouting { }
