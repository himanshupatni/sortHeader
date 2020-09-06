import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortValuesComponent } from './sort-values/sort-values.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material

import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    SortValuesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
