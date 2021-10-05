import React from "react";

import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div id="weather-info" className="border-white rounded">
      <div id="city-state">Seattle Weather</div>
      <div id="local-time">
        As of{" "}
        <span id="time">
          <FormattedDate date={props.data.date} />
        </span>
      </div>
      <div id="current-weather" className="row justify-content-between">
        <div id="floating-temperature" className="col">
          <span id="current-temperature">{props.data.temperature}</span>
          <span id="units"> °F</span>
          <div id="weather-description">
            <h2>{props.data.description}</h2>
          </div>
        </div>
        <div id="current-temperature-img" className="col-4">
          <img src={props.data.icon} alt={props.data.description} />
          <h2>
            <span id="high-temp">{props.data.highTemperature}°</span>/
            <span id="low-temp"> {props.data.lowTemperature}°</span>
          </h2>
        </div>
      </div>
      <div id="weather-stats">
        Humidity: <span id="humidity">{props.data.humidity}</span>%
        <br />
        Wind: <span id="wind-speed">{props.data.wind}</span> m/s
      </div>
    </div>
  );
}
