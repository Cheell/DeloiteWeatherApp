import { IWeatherResponse } from '../models/location-weather.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as WeatherActions from './locationss-weather.actions';

export interface State {
  locationsWeather: IWeatherResponse[]
}

const initialState: State = {
  locationsWeather: []
}

const _locationsWeatherReucer = createReducer (
  initialState,

  on(
    WeatherActions.addWeather,
    (state, action) => ({
      ...state,
      locationsWeather: state.locationsWeather.concat(action.weatherResponse)
    })
  )
)

export function locationsWeatherReucer(state: State | undefined, action: Action) {
  return _locationsWeatherReucer(state, action);
}
