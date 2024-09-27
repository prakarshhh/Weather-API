import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '2c16cb78a1aa8f0e1380b2411da39361';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric'
    };

    return this.http.get(this.apiUrl, { params });
  }
}
