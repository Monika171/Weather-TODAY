class UI {
  constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      // this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint = document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
      this.location.textContent = weather.name;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = weather.main.temp + '°C';
      this.icon.setAttribute(
          'src',
          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      );
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      // this.feelsLike.textContent = `Visibility: ${weather.visibility}m`
      this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
      this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s`;
  }
}
