import Tarjeta from './Tarjeta';

function Resultados(props) {

  const datos = props.datos;
  const numitems = props.numitems;

  const city = datos.location.name;
  const country = datos.location.country;
  const timezone = datos.location.tz_id;
  const day = datos.forecast.forecastday; //array de pronosticos de los dias siguietnes

  return (
    <>
      <div id="resultados">
        <h3>Ciudad: {city}</h3>
        <h3>País: {country}</h3>
        <h3>Código Timezone: {timezone}</h3>
        <h3>El tiempo en los próximos días será:</h3>
        <div id="tarjetas">
          {day.slice(0, numitems).map((dia, index) => (
            <Tarjeta key={index} datos={dia} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Resultados;