import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName = ''; // Define cityName property
  weatherData: any; // Define weatherData property
  constructor(private weatherService: WeatherService) {}
  updateWeatherData(data: any) {
    this.weatherData = data;
  }

  onCityNameChange(cityName: string) {
    console.log('Received city name:', cityName);
    this.cityName = cityName;
  } 

  
}
