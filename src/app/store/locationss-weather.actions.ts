import { createAction, props } from '@ngrx/store';
import { IWeatherResponse } from '../models/location-weather.model';

export const addWeather = createAction(
  '[Weather] Add Weather',
  props<{
    weatherResponse: IWeatherResponse
  }>()
)
