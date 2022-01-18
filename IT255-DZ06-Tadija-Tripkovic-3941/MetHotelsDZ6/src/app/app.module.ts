import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByUserPrice } from './components/rooms/roomFilter';
import { DodajSobuComponent } from './components/dodaj-sobu/dodaj-sobu.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    FilterByUserPrice,
    DodajSobuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
