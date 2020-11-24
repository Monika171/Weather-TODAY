class Weather {
  constructor(city, country) {
      this.apiKey = '21e8174977b99bbfa2294eb3a3548a25';
      this.city = city;
      this.country = country;
  }

  //fetch weather from API, returns a Promise
  async getWeather() {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
      );

      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
  }

  //change location
  changeLocation(city, country) {
      this.city = city;
      this.country = country;
  }
}
