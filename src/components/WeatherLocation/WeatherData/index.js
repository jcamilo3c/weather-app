import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
    const {temperature:temp, weatherState, humidity, wind} = data;
    return(
        <div className="weatherDataCont">
            <WeatherTemperature temperature={temp} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    );
};

export default WeatherData;
