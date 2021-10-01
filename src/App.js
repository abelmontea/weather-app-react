import "./App.css";

function App() {
  return (
    <div className="App container">
      <form id="search-form">
        <div id="search-engine" className="row justify-content-evenly">
          <div className="col">
            <input
              type="text"
              placeholder="Look up any city!"
              className="search-city form-control"
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
      <div className="github-link text-center">
        <a
          href="https://github.com/abelmontea/Working-Weather-App"
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
