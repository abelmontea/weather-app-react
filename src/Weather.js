import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div id="weather-info" className="border-white rounded">
      <div id="city-state">Seattle Weather</div>
      <div id="local-time">
        As of <span id="day">Monday</span>, <span id="time">1:52 pm</span>
      </div>
      <div id="current-weather" className="row justify-content-between">
        <div id="floating-temperature" className="col">
          <span id="current-temperature">56</span>
          <span id="units"> °F</span>
          <div id="weather-description">
            <h2>Clear</h2>
          </div>
        </div>
        <div id="current-temperature-img" className="col-4">
          <h2>
            <span id="high-temp">85°</span>/<span id="low-temp"> 72°</span>
          </h2>
        </div>
      </div>
      <div id="weather-stats">
        Humidity: <span id="humidity">2</span>%
        <br />
        Wind: <span id="wind-speed">5</span> m/s
      </div>
    </div>
  );
}
