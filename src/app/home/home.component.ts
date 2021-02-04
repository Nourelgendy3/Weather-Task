import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat;
  lon;
  weather;
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
          console.log(data);
          this.weather = data as any;
         // console.log(this.weather.data.nearest_area[0].region.value);

        })
      })
      
    }
  }

}
