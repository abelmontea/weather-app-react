import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div id="weather-forecast" classNameName="border-white rounded">
        <div id="forecast">
          Forecast for <span id="forecast-city">{props.data.city}</span>
        </div>
        <div className="row justify-content-around text-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return false;
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.data.coordinates.lon;
    let lat = props.data.coordinates.lat;
    let apiKey = `2e10dd656c312415a04f00d607cce045`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
