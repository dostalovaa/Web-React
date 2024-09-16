import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import "./WeatherApi.css";

const WeatherApi = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState();
  const [weatherImg, setWeatherImg] = useState();

  const getWeatherData = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fafb28754dd390830d6b2a750e8fccf0&units=metric&lang=cz`
      );
      setWeather(response.data);
      setInput("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const weatherImgHandler = () => {
    const weatherCondition = weather.weather[0].main;
    if (weatherCondition == "Clouds") {
      setWeatherImg(assets.clouds);
    } else if (weatherCondition == "Rain") {
      setWeatherImg(assets.rain);
    } else if (weatherCondition == "Clear") {
      setWeatherImg(assets.clear);
    } else if (weatherCondition == "Drizzle") {
      setWeatherImg(assets.drizzle);
    }
  };

  useEffect(() => {
    if (weather) {
      weatherImgHandler();
    }
  }, [weather]);

  return (
    <div className="card">
      <h2>Weather App</h2>
      <form onSubmit={getWeatherData}>
        <div>
          <input
            type="text"
            placeholder="Zadejte název města"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit">
            <FaSearch className="icon" />
          </button>
        </div>

        {isLoading && (
          <div className="loading">
            <span></span>
            <p>Načítám...</p>
          </div>
        )}

        {!isLoading && weather && (
          <div className="weather">
            <img src={weatherImg} alt="weatherImg" />
            <h3 className="temp">{Math.round(weather.main.temp)}°C</h3>
            <h3 className="city">{weather.name}</h3>
            <p className="country">{weather.sys.country}</p>

            <div className="details">
              <div className="col">
                <img src={assets.humidity} alt="Humidity" />
                <div>
                  <p>{weather.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="col">
                <img src={assets.wind} alt="Wind Speed" />
                <div>
                  <p>{weather.wind.speed} m/s</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && !weather && (
          <p className="loading">Generate Weather Info For You.</p>
        )}
      </form>
    </div>
  );
};

export default WeatherApi;
