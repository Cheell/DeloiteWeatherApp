import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IWeatherResponse } from '../models/location-weather.model';
import { State } from '../store/location-weather.reducer';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {
  locationsWeather!: Observable<IWeatherResponse[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.locationsWeather = this.store.select('locationsWeather').pipe(
      map( (m: any) => {
        return m['locationsWeather'];
      })
    );
  }

}
