import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/*
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Miami"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
*/
class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
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
    }

    render() {
        console.log("render");
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/> }
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherLocation;
