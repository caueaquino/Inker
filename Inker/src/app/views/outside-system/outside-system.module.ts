import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { OutsideSystemRouting } from './outside-system.routing';

import { OutsideSystemComponent } from './outside-system.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

import { MaterialAngularModule } from 'src/app/shared/material-angular.module';


@NgModule({
  declarations: [
    OutsideSystemComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent
  ],
  imports: [
    CommonModule,
    OutsideSystemRouting,
    MaterialAngularModule
  ]
})
export class OutsideSystemModule { }
