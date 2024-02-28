
// https://medium.com/@alexanie_/https-ocxigin-hashnode-dev-uselocation-hook-in-react-router-758a0a711308
import './App.css'
import { useLocation } from 'react-router-dom'


function App() {

  const location = useLocation();
  console.log(location);


  return (

    <>
      <h2>UseLocation</h2>
      <p>Hello, useLocation</p>
   
    </>
  )
}

export default App
