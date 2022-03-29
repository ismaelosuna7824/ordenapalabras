import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
