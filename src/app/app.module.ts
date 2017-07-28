import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdInputModule } from '@angular/material'


import { AppComponent } from './app.component';
import { conversationComponent } from '../conversation/conversation.component'

@NgModule({
  declarations: [
    AppComponent,
    conversationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
