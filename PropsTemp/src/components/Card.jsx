import React , { useEffect, useState } from 'react'
import axios from "axios";
import './Card.css'

const Card = ({cidade}) => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "a1864402add5212c9b9d788621856910";

    const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_KEY}`
          //https://api.openweathermap.org/data/2.5/weather?q=Berlim&units=metric&appid=a1864402add5212c9b9d788621856910
          
            );
            
          setWeatherData(response);
          console.log('response.data : ',response.data.main.temp);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div className='ContainerCard'>
        <p>{cidade}</p>
        {weatherData ? (
        <div className='Temp'>
        <p>{(weatherData.data.main.temp).toFixed(1)}°C</p>     
        </div> 
        ) : (
        <div className='Temp'>
        <p>...loading data </p>
        </div>
        )}
    </div>
  )
}

export default Card