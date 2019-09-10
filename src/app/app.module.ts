import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalleComponent } from './balle/balle.component';
import {PhysiqueService} from './physique.service';

@NgModule({
  declarations: [
    AppComponent,
    BalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
