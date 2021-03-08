import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './locations-list/location/location.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import * as locationsWeatherReducer from '../app/store/location-weather.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationsListComponent,
    WeatherListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({locationsWeather: locationsWeatherReducer.locationsWeatherReucer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
