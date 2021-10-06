import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div>
        <span id="current-temperature">{Math.round(props.fahrenheit)}</span>
        <span id="units">
          {" "}
          °F |{" "}
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div>
        <span id="current-temperature">{Math.round(celcius)}</span>
        <span id="units">
          {" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
