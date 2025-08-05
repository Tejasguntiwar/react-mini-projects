import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d2bd72ab7c02ac64ff0044b6946c2ce2`
      );

      const data = await res.json();

      if (data) {
        setWeatherData(data);
        console.log(weatherData);
        console.log(data);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading!</div>;

  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {weatherData ? (
        <div className="weather-container">
          <div className="city-name">
            <h2>
              {weatherData.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData.main.temp}</div>
          <p className="decription">{weatherData.weather[0].description}</p>
          <div className="weather-info">
            <div className="column">
                <div>
                    <p className="wind">{weatherData.wind.speed}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <p className="humidity">{weatherData.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
          </div>
          <p className="feels">{"Feels Like " + weatherData.main.feels_like}</p>
        </div>
      ) : null}
    </div>
  );
}
