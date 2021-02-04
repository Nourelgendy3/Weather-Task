import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // url = 'https://api.openweathermap.org/data/2.5/weather';
   newURL = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=1b1f8060b5914877a59192545212801&format=json&includelocation=yes';
  apiKey = '1b1f8060b5914877a59192545212801';
  constructor(private http: HttpClient) { }
  getWeatherDataByCoords(lat, lon) {
   
    return this.http.get(`${this.newURL}&q=${lat},${lon}`);
  }
   getWeatherDataByCityName(city: string) {
  
     // new+york
  return this.http.get(`${this.newURL}&q=${city.replace(/ /g, "+")}`);
  }
}
