export default function WeatherTemperature(props) {
  return (
    <div>
      <span id="current-temperature">{Math.round(props.fahrenheit)}</span>
      <span id="units"> °F</span>
    </div>
  );
}
