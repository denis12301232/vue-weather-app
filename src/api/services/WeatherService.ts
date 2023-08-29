export default class WeatherService {
  static getWeatherByCity(city: string) {
    return fetch(
      `${import.meta.env.VITE_OPEN_WEATHER_API_URL}?q=${city}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`
    )
  }
}
