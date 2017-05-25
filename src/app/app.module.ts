import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyFirstNgComponentComponent } from './my-first-ng-component/my-first-ng-component.component';

import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { LeftMenuBarComponent } from './left-menu-bar/left-menu-bar.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { TyrionComponentComponent } from './tyrion-component/tyrion-component.component'

@NgModule({
  declarations: [
    AppComponent,
    MyFirstNgComponentComponent,
    LeftMenuBarComponent,
    DashboardComponentComponent,
    AccountComponentComponent,
    TyrionComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MyFirstNgComponentComponent
      },{
        path: 'cercie',
        component: DashboardComponentComponent
      },{
        path: 'jofferey',
        component: AccountComponentComponent
      },{
        path: 'tyrion',
        component: TyrionComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
