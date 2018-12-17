// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App1Module } from './app1/app1.module';

// Components
import { AppComponent } from './app.component';
import { App2Module } from './app2/app2.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    App1Module,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
