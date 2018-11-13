import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';
import PropTypes from 'prop-types';

const ForecastItem = (props) => {
    const {weekDay, hour, data} = props;
    return(
        <div>
            <div>{weekDay} Hora: {hour}</div>
            <WeatherData data={data}></WeatherData>
        </div>
    )
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastItem;
