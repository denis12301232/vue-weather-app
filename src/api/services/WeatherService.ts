export default class WeatherService {
  static getWeatherByCity(city: string) {
    return fetch(
      `${import.meta.env.VITE_OPEN_WEATHER_API_URL}?q=${city}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    );
  }

  static getWeatherByCoords(lat: number, lon: number) {
    return fetch(
      `${import.meta.env.VITE_OPEN_WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    );
  }
}
