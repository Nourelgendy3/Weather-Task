import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-second-display',
  templateUrl: './second-display.component.html',
  styleUrls: ['./second-display.component.css']
})
export class SecondDisplayComponent implements OnInit {
  lat;
  lon;
  weatherD;
  currentDate: Date;
  constructor(private weatherService: WeatherService) { 
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weatherD = data;
        })
      })
      
    }
  }
  getCity(city) {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data => {
      this.weatherD = data;
    })
  }

}
