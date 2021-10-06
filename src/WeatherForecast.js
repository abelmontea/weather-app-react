import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lon = props.data.coordinates.lon;
  let lat = props.data.coordinates.lat;
  let apiKey = `2e10dd656c312415a04f00d607cce045`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div id="weather-forecast" className="border-white rounded">
      <div id="forecast">
        Forecast for <span id="forecast-city">Seattle</span>
      </div>
      <div class="row justify-content-start text-center">
        <div class="col first-forecast border-right">
          <span id="first-day">Wednesday</span>
          <div id="temp" class="forecast-temp">
            20°
          </div>
          <img
            src={props.data.icon}
            class="first-day-image"
            alt={props.data.description}
          />
        </div>
      </div>
    </div>
  );
}
