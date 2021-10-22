import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  current$: Observable<ICurrentWeather>
  constructor(private weatherService: WeatherService) {
    this.current$ = this.weatherService.getCurrentWeather('Oaxaca', 'MX')
  }
}
