import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor() {
    this.current = {
      ciudad: 'Ecatepec',
      estado: 'MX',
      fecha: new Date(),
      imagen: 'assets/img/index.jpg',
      temperatura: 28,
      descripcion: 'soleado',
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
