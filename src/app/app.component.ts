import { Component, OnInit } from '@angular/core';
import { ApiService as APIService } from '../service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WeatherDeloitte';

  constructor(private apiService: APIService) {}

  ngOnInit() {
    // this.apiService.getCityWeatherNow().subscribe(
    //   r => console.log(r, 'TAW')
    // )
  }


}
