import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { appRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
