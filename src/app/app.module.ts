import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
