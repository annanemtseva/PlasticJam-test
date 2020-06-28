import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UsersListPageComponent } from './users-list-page/users-list-page.component';
import { UserItemPageComponent } from './user-item-page/user-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersListPageComponent,
    UserItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
