import { useState } from 'react'
import Header from "./Header"
import Resultados from './Resultados'
import './App.css'
import CONFIG from "./config/config"
import { mock1 } from './constants/mock'
//import { mock2 } from './constants/mock2'

const USE_SERVER = CONFIG.use_server

function App() {
  
  const [resultado, setResultado] = useState("")

  const [latitud, setLatitud] = useState(CONFIG.default_lat)
  const [longitud, setLongitud] = useState(CONFIG.default_lon)

  const [error, setError] = useState("")

  const handleLatitudChange = (e) => {
    setLatitud(e.target.value)
  }
  const handleLongitudChange = (e) => {
    setLongitud(e.target.value)
  }

  const handleBuscar = async () => {
    //setError("");  // Reiniciar cualquier error previo
    if (USE_SERVER) {

      try {
        let queryparams = `forecast.json?key=${CONFIG.api_key}&q=${latitud},${longitud}&days=${CONFIG.num_items_query}&aqi=no&alerts=no`; //esta bien
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const datos = await response.json(); 
        
        if (response.status == 200) {
          setResultado(datos);
          setError(null);

        } else { 
          setResultado(datos) }
      } catch (e) {
        setError(e.message)
        

      }
    } else {
        setResultado(mock1); 

    }
  }


  return (
    <>
      <div id="main">
        <Header />
        <h2 id="titulo"> El tiempo </h2>
        <div>
          <label>Latitud: </label> <input type="number" id="latitud" value={latitud} onChange={handleLatitudChange}></input>
        </div>
        <div>
          <label> Longitud: </label><input type="number" id="longitud" value={longitud} onChange={handleLongitudChange}></input>
        </div>
        <br />
        <button type='submit' id='buscar' onClick={handleBuscar}>Buscar</button>

        {resultado && <Resultados numitems={CONFIG.num_items_show} datos={resultado} />}
       
      </div>

    </>
  )
}

export default App
