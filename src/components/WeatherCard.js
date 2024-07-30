import React, { useEffect, useState } from 'react';
import './WeatherCard.css';

// forecastapp is the master file use "npm start" on that file.

const WeatherCard = () => {

const [city, setCity] = useState(null);
const [search, setSearch] = useState("Mumbai");

useEffect( () => {
  const fetchApi = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e624f1b9f04e3068d970797feb510bc`
    const response = await fetch(url);
    const resJson = await response.json();
    // console.log(resJson);
    setCity(resJson.main);
  };
  
  fetchApi();
},[search] )

  return (
    <>
    <div>
    <div>
    <input type="search" 
    value = {search}
    className="inputField" 
    onChange={ (event) => { setSearch(event.target.value) } }/>
    </div>

{ !city ? (
  <p className="errorMsg"> No Data Found </p>
  ) : (
    <div className="info">
        <h2 className="location">
            <i className="fa fa-street-view"> </i>{search}
        </h2>
        <h1 className='temp'>
            {city.temp}°Cel
        </h1>
        <h3 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel 
        </h3>

<div className="wave-one"></div>
<div className="wave-two"></div>
<div className="wave-three"></div>

    </div>
  )}
  </div>
  </>
  )}


export default WeatherCard;
