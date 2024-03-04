import React, { useState, useEffect} from 'react';
import './WeatherTag.css'

const WeatherTag = () => {

  const API_KEY = "a1864402add5212c9b9d788621856910";
  const [ inputValue, setInputValue ] = useState('');
  const [ data, setData ] = useState (null);
  const [ city, setCity] = useState('');

  // function coletar Teno Data
  const getTempData = (API_KEY, query) => {
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;
    let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&q=${query}`;
    console.log('url:', url)
    fetch(url)
      .then((res) => {
        //console.log('res :', res)
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        setCity(query);
        // console.log(res.main);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // call use Effect for render data every search input
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);
  return (
    <div>
      
      <input className="weather-input-city"
        type="text"
        placeholder="Enter City Name"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      
      {!inputValue.length ? null : data ? (
        <div>
          <p className="weather-p-city">Weather Details of City : {city}</p>
          
          <div className="weather-information-container">
          <p >Current Temperature : {data.temp} °C</p>
          <p >Temperature Range : {data.temp_min} °C  to  {data.temp_max} °C</p>
          <p >Humidity  : {data.humidity}</p>
          <p >Sea Level  : {data.sea_level}</p>
          <p >Ground Level  : {data.grnd_level}</p>
          
          </div>
        </div>
      ) : (
        <p className="weather-valid-city-name">Enter Valid City Name</p>
      )}
    </div>
   
  )
}

export default WeatherTag