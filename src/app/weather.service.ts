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
    return this.http.get('http://jsonplaceholder.typicode.com/posts/1/comments')
  }
}
