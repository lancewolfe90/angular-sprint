import { Injectable } from '@angular/core';
import { Weather } from './weather/weather.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any>  {
    return this.http.get('https://www.metaweather.com/api/location/search/?query=san')
  }
}
