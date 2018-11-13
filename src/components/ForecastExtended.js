import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {getUrlForecastByCity} from './../services/getUrlByCity';
import transformForecast from './../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const api_forecast = getUrlForecastByCity(this.props.city);
        fetch(api_forecast).then( response => (
            response.json()
        )).then( data => {
            const forecastData = transformForecast(data);
            this.setState({
                forecastData
            });
        });
    }
    

    renderForecastItemDays(forecastData) {
        return(forecastData.map((forecast) =>
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>
        ));
    }

    renderProgress() {
        return(<CircularProgress size={80}></CircularProgress>);
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
