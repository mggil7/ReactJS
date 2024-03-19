import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherTag.css";

const WeatherTag2 = () => {
  const city = "New York";
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "a1864402add5212c9b9d788621856910";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      //console.log('response.data : ',response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Container">
      <div className="TopCard">
        <h2>Temperatura em {city}</h2>
      </div>
      {weatherData ? (
        <div className="MiddleCard">
          <p>{weatherData.main.temp.toFixed(1)}°C</p>
        </div>
      ) : (
        <div className="MiddleCard">
          <p>...loading data</p>
        </div>
      )}

      {weatherData ? (
        <div className="BottomCard">
          <p>humidade:{weatherData.main.humidity}%</p>
        </div>
      ) : (
        <div className="BottomCard">
          <p>...loading data</p>
        </div>
      )}
    </div>
  );
};

export default WeatherTag2;
