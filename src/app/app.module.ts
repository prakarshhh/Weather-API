import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityInputComponent } from './city-input/city-input.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { DateTimeDisplayComponent } from './date-time-display/date-time-display.component'; // Import your components here

@NgModule({
  declarations: [
    AppComponent,
    CityInputComponent,
    WeatherDisplayComponent,
    DateTimeDisplayComponent // Add your components to the declarations array
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
