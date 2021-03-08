import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherRequest, IWeatherResponse } from 'src/app/models/location-weather.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  APIKey = '0d7303c17ee3d3482cd82a2ad273a90d';

  constructor(private http: HttpClient ) { }

  getLocationWeatherNow(request: IWeatherRequest) {
    return this.http.get<IWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=
     ${request.city}&appid=${this.APIKey}&units=${request.units}`).pipe(map(
      m => {
        m.request = request;
        m.main.visualTemp = this.setTemp(m.main.temp);
        m.request.tempUnits = this.setTempUnits(m.request.units);
        return m
      })
    );
  }

  private setTempUnits(units: string): string {
    switch (units) {
      case 'metric':
        return '°C';
      case 'standard':
        return '°K'
      case 'imperial':
        return '℉'
      default:
        return '°C';
    }
  }

  private setTemp(temp: number): string {
    return  temp > 0 ? '+' + temp : '' + temp;
  }
}
