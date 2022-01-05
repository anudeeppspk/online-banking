import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalstatementComponent } from './balstatement/balstatement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundComponent } from './fund/fund.component';
import { HistoryComponent } from './history/history.component';

import{ LoginComponent } from './login/login.component';

import { SettingsComponent } from './settings/settings.component';
import{ SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'balstatement', component:BalstatementComponent},
  {path:  'history', component:HistoryComponent},
  {path:  'fund', component:FundComponent},
  {path: 'settings',component:SettingsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
