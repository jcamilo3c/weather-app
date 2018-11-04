import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY
} from './../../constants/weathers';

const data = {
    temperature: 15,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
};
const data2 = {
    temperature: 35,
    weatherState: WINDY,
    humidity: 20,
    wind: "40 m/s"
}; // data2 solo para modificar el estado del componente que cambio
/*
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Miami"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
*/
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Miami',
            data: data
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    } 
    
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( response => {
            console.log(response);
            return response.json();
        }).then( data => {
            console.log('respuesta')
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });

        /*this.setState({
            city: 'Chicago',
            data: data2
        });*/   
    }

    render() {
        console.log("render");
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherLocation;
