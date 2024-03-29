import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import LocationSearchBar from "./components/LocationSearchBar";
import WeatherResults from "./components/WeatherResults";
import Map from "./components/Map";

function App() {
  const [coordinatesToCheck, setCoordinatesToCheck] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [weatherForTrip, setWeatherForTrip] = useState();
  const [weatherObjects, setWeatherObjects] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [tripData, setTripData] = useState({
    startLocation: {
      name: "Savannah, GA",
      lat: "32.0564572",
      lon: "-81.0951271",
    },
    endLocation: { name: "Atlanta, GA", lat: "33.7489924", lon: "-84.3902644" },
  });
  const [route, setRoute] = useState({
    start: "Savannah, GA",
    end: "Atlanta, GA",
  });
  const [responseCount, setResponseCount] = useState(0);

  function handleSubmit() {
    console.log(tripData);
  }

  const startSearch = (
    <LocationSearchBar
      type="start"
      tripData={tripData}
      setTripData={setTripData}
    />
  );
  const endSearch = (
    <LocationSearchBar
      type="end"
      tripData={tripData}
      setTripData={setTripData}
    />
  );
  const map = (
    <Map
      responseCount={responseCount}
      setResponseCount={setResponseCount}
      route={route}
      coordinatesToCheck={coordinatesToCheck}
      weatherForTrip={weatherForTrip}
      setWeatherForTrip={setWeatherForTrip}
      weatherObjects={weatherObjects}
      setWeatherObjects={setWeatherObjects}
      weatherData={weatherData}
      setWeatherData={setWeatherData}
    />
  );
  const weather = (
    <WeatherResults
      responseCount={responseCount}
      setResponseCount={setResponseCount}
      tripData={tripData}
      route={route}
      setRoute={setRoute}
      coordinatesToCheck={coordinatesToCheck}
      setCoordinatesToCheck={setCoordinatesToCheck}
      weatherObjects={weatherObjects}
      setWeatherObjects={setWeatherObjects}
      weatherData={weatherData}
      setWeatherData={setWeatherData}
    />
  );

  return (
    <>
      <div className="app-wrapper">
        <div className="left-panel">
          {startSearch}
          {endSearch}
          {map}
        </div>
        <div className="right-panel">{weather}</div>
      </div>
    </>
  );
}

export default App;
