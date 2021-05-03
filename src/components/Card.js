import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const Card = (loc) => {
  const [weather, setWeather] = useState({});
  const getWeather = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${loc.location.lat}&lon=${loc.location.lat}&appid=${API_KEY}`
    );
    const data = await res.json();
    const icon = await `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    setWeather({ ...data, iconSRC: icon });
  };
  useEffect(() => {
    getWeather();
    console.log(weather);
  }, []);
  return (
    <div className="card">
      {weather.main && (
        <>
          <img src={weather.iconSRC} alt={weather.weather[0]} />
          <div id="text">
            <ul>
              <li>
                <strong>{weather.weather[0].main}</strong>
              </li>
              <li>{weather.weather[0].description}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
