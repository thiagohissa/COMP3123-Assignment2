import React from 'react';
import axios from 'axios';
import API from './api';
const API_KEY = require("./secrets");
const URL = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + API_KEY;

export default class Forecast extends React.Component
{
    //Define state default values
    state = {
        forecast: {},
    };

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(URL) //`https://jsonplaceholder.typicode.com/users` <Image src="holder.js/171x180" rounded /> http://openweathermap.org/img/wn/10d@2x.png
            .then(res => {
                if(res.status === 200){
                    console.log(res.data);
                    const forecast = res.data;
                    this.setState({ forecast });
                }
                else{
                    console.log(res.status);
                    console.log(res.statusText);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    //Component Lifecycle Callback
    render() {
        if(this.state.forecast.weather == null){
            return(<p>Loading...</p>);
        }
        return (
            <div>
                <h1>{ this.state.forecast.name }</h1>
                { this.state.forecast.weather.map(weather =>
                    <ul>
                        <li>ID: {weather.id}</li>
                        <li>Forecast: {weather.main}</li>
                        <li>Description: {weather.description}</li>
                        <li>Description: {weather.icon}</li>
                    </ul>
                ) }

                {
                    <ul>
                        <li>Feels like: {this.state.forecast.main.feels_like}</li>
                        <li>Temperature: {this.state.forecast.main.temp}</li>
                        <li>Max: {this.state.forecast.main.temp_max}</li>
                        <li>Min: {this.state.forecast.main.temp_min}</li>
                    </ul>
                }
                <p>ICON: {this.state.forecast.weather[0].icon}</p>
                <img src={ "http://openweathermap.org/img/wn/" + this.state.forecast.weather[0].icon + "@2x.png" } />
            </div>
        )
    }
}
