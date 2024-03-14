import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharePictureComponent } from './share-picture/share-picture.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigleFacesnapComponent } from './sigle-facesnap/sigle-facesnap.component';


@NgModule({
  declarations: [
    AppComponent,
    SharePictureComponent,
    FaceSnapeListComponent,
    HeaderComponent,
    LandingPageComponent,
    SigleFacesnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    provideAnimationsAsync(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule{
  constructor(){
    registerLocaleData(fr.default)
  }
 
 }
