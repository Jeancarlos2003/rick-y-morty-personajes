import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './components/card/card.component';

import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [CardComponent, ListComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [], 
})
export class AppModule {}
