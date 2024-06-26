import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { SecoundModelViewerComponent } from './secound-model-viewer/secound-model-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelViewerComponent,
    SecoundModelViewerComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
