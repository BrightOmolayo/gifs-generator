const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchButton')
const imgContainer = document.getElementById('image-container')

class WeatherService {
  constructor () {
    this.apiKey = '2a9c3825c4e14169a7c141107240402'
  }

  async fetchWeather (city) {
    try {
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=5`

      const response = await fetch(apiUrl, {
        mode: 'cors'
      })
      const data = await response.json()

      return data
    } catch (error) {
      console.log(error)
    }
  }
}
