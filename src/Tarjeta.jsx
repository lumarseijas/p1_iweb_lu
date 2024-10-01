function Tarjeta(props) {

    const datos = props.datos;
   // const key = props.key;

    const date = new Date(datos.date_epoch * 1000).toLocaleDateString();
   
    return (
        <li className="tarjeta">
            <h4 className="date">{date}</h4>
            <img className="tiempoimg" src={datos.day.condition.icon} alt="Weather Icon" />
            <p className="temp">Temp: {datos.day.avgtemp_c}°C</p>
            <p className="humedad">Humedad: {datos.day.avghumidity}%</p>
            <p className="viento">Viento: {datos.day.maxwind_kph} km/h</p>
        </li>
    );
}

export default Tarjeta;