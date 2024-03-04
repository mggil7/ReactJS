import React, { useState, useEffect } from 'react'

import './TemperatureCard.css'


const TemperatureCard = ({city}) => {
    const API_KEY = "a1864402add5212c9b9d788621856910";
    const [ data, setData ] = useState ({});
    const [ city1, setCity1 ] = useState (null);

    const getTempData = async (city) => {
        
        let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metri&q=${city}`;
        console.log('url:', url)
        fetch(url)
        .then((res) => {
          
          return res.json();
        })
        .then((res) => {
            
        console.log('res :', res.main)
        console.log('type of res:', typeof(res.main))
          setData(res.main);
          console.log('data:', data)
          console.log('data temp:', data.main.temp)
          setCity1(city);
          
          // console.log(res.main);
        })
        .catch((err) => {
          console.log("error in get data", err);
          setData(null);
        });
    };

    useEffect(() => {
        getTempData(city);
      }, [city]);
  return (

    <div className='container'>
        <div className='Title'><h2>TemperatureCard</h2></div>
        <div className='TempCity'>
            <h2>Temperatura em {city1}</h2>
            <p>'10'</p>
            </div>
        

    </div>
  )
}

export default TemperatureCard