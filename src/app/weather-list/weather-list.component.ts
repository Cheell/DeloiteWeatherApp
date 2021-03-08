import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { IWeatherResponse } from '../models/location-weather.model';
import { State } from '../store/location-weather.reducer';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  weatherList!: Observable<IWeatherResponse[]>;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.weatherList = this.store.select('locationsWeather').pipe(
      map( (m: any) => {
        return m['locationsWeather'];
      })
    );
  }
}
