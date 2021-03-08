export interface IWeatherResponse {
  request : IWeatherRequest;
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  main: {
    visualTemp: string;
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
}

export interface IWeatherRequest {
  city: string;
  units: string;
  tempUnits?: string;
}
