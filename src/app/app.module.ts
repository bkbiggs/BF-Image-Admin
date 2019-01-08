import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalImageComponent } from './animal-image/animal-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    AnimalsComponent,
    AnimalImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
