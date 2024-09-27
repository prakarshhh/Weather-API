import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent {
  cityName = '';
  @Output() weatherData = new EventEmitter<any>();
  @Output() cityNameChange = new EventEmitter<string>();
  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    this.weatherService.getWeather(this.cityName).subscribe(data => {
      this.weatherData.emit(data);
      this.cityNameChange.emit(this.cityName);
    });
  }
}
