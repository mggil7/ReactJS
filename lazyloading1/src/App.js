// https://hackmd.io/@linhl3/react18_suspense
//https://medium.com/@harshanabatagalla/building-a-weather-forecast-app-with-react-and-openweathermap-api-acb57627118b

import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import TemperatureCard from './components/TemperatureCard';
const NYTemp = React.lazy(() => import ('./WeatherTag2'));
const BerlinTemp = React.lazy(() => import ('./WeatherTag'));
const SFTemp = React.lazy(() => import ('./WeatherTag3'));

function App() {

  return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0"
        }}  
      >
        <h2>
          <span>How is the temperature today ?</span>
        </h2>
        <React.Suspense fallback={<FontAwesomeIcon icon={solid('rotate')} spin/>}> 
          
          <BerlinTemp />
          <NYTemp/>
          <SFTemp/>
          

        </React.Suspense>
        <TemperatureCard city={'Berlim'}/>
      </div>
  );
}

export default App;