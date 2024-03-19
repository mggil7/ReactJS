
import './App.css';
import React from 'react';

import TemperatureCard from './components/TemperatureCard';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import Card from './components/Card'


function App() {

  return (
      <div className='Container'>
        <h2>
          <span>Testing Props - Temperatures / Cities</span>
        </h2>
        <div className='ContainerBoxes'>


          <Card cidade='Berlim'/>
          <Card cidade='Manaus'/>
          <Card cidade='Amsterdam'/>
          <Card cidade='Berlim'/>
          <Card cidade='Frankfurt'/>
          <Card cidade='Melbourne'/>
          <Card cidade='Tokyo'/>
          <Card cidade='Quarteira'/>
          <Card cidade='Evora'/>
          <Card cidade='Sevilla'/>
          <Card cidade='Lintgen'/>
          <Card cidade='Creta'/>


        </div>
      </div>
  );
}

export default App;