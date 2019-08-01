import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { DesignListComponent } from './design-list/design-list.component';
import { ClientTableComponent } from './client-table/client-table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DesignListComponent,
    ClientTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
