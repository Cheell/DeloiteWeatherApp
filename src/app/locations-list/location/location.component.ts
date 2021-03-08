import { Component, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IWeatherRequest as IWeatherRequest, IWeatherResponse } from 'src/app/models/location-weather.model';
import { ApiService } from 'src/service/api.service';
import * as WeatherActions from '../../store/locationss-weather.actions';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements AfterViewInit {
  @Input() locationWeather: IWeatherResponse = {
    main: {} as any,
    request: {} as any,
    weather: {} as any
  };
  plus = faPlus;
  minus = faMinus;
  iconUrl = 'http://openweathermap.org/img/wn/'
  allowAdd = true;

  constructor(private fb: FormBuilder, private apiService: ApiService, private store: Store) { }

  public cities = ['Kiev', 'Tel Aviv', 'New York', 'Rome', 'Berlin', 'Jerusalem', 'Kharkiv'];

  form = this.fb.group({
    city: ["", [Validators.required]],
    units: ["", [Validators.required, Validators.pattern(/^(metric|standard|imperial)$/)]]
  })

  ngAfterViewInit(): void{
    if (this.locationWeather.request.city) {
      this.allowAdd = false;
      const index = this.cities.findIndex(i => i === this.locationWeather.request.city);
      console.log(this.cities[index]);
      this.form.controls['city'].setValue(this.cities[index]);
      this.form.controls['units'].setValue(this.locationWeather.request.units);
    }
  }

  addLocation() {
    const request: IWeatherRequest = {
      city: '' + this.form.controls['city'].value,
      units: '' + this.form.controls['units'].value,
    }
    this.apiService.getLocationWeatherNow(request).subscribe(
      r => {
        this.store.dispatch(WeatherActions.addWeather({weatherResponse: r}));
        this.form.reset();
      }
    );
  }
}
