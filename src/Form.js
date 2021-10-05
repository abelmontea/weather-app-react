import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: Math.round(response.data.main.temp),
      lowTemperature: Math.round(response.data.main.temp_min),
      highTemperature: Math.round(response.data.main.temp_max),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = `2e10dd656c312415a04f00d607cce045`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <div id="search-engine" className="row justify-content-evenly">
            <div className="col">
              <input
                type="search"
                placeholder="Look up any city!"
                className="search-city form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-auto">
              <input
                type="submit"
                value="Search"
                className="search-button btn btn-success"
              />
            </div>
            <div className="col-md-auto">
              <button className="use-current-location btn btn-primary">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
