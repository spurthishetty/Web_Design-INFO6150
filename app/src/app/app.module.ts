import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
