import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  
})
export class AppModule { }
