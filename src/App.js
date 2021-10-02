import "./App.css";

import Form from "./Form.js";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container">
      <Form />
      <Weather />
      <div id="weather-forecast" class="border-white rounded">
        <div id="forecast">
          Forecast for <span id="forecast-city">Seattle</span>
        </div>
        <div id="forecast-data"></div>
      </div>
      <div className="github-link text-center">
        <a
          href="https://github.com/abelmontea/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Aisha Natividad
      </div>
    </div>
  );
}

export default App;
