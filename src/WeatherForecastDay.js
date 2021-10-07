import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="col first-forecast">
      <span id="first-day">{day()}</span>
      <div id="temp" className="forecast-temp">
        {Math.round(props.data.temp.day)}°
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.description}
      />
    </div>
  );
}
