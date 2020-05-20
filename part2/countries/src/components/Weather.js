import React,{useState, useEffect} from 'react'
import axios from 'axios'


const Weather = ({capitalCity}) => {
    const [weather, setWeather] = useState(null);
    // Fetch weather information from API
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capitalCity}`)
            .then(response => setWeather(response.data.current));
    }, []);
    
    console.log(weather)
    return (
        <div>
        <h2>Weather in {capitalCity}</h2>
            {
                weather ?
                <div>
                    <p><strong>Temperature:</strong> {weather.temperature} Celcius</p>
                    <img src={weather.weather_icons[0]} alt='Weather-icon' />
                    <p><strong>Wind:</strong> {weather.wind_speed} mph, direction {weather.wind_dir}</p>
                </div>
                :
                <p>Loading weather data...</p>
            }
        </div>
    );
}

export default Weather
