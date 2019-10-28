import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { EditComponent } from './components/googlemap/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [
    EditComponent
  ],
  declarations: [
    AppComponent,
    GooglemapComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqOU2JQ321sxZY-GVwFvVtu0_8h_Sj-14S'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
