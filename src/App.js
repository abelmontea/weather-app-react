import "./App.css";

import Form from "./Form.js";

function App() {
  return (
    <div className="App container">
      <Form defaultCity="Seattle" />
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
