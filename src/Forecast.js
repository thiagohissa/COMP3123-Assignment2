import React from 'react';
import axios from 'axios';
import API from './api';
import { Button, Container, Row, Col } from 'react-bootstrap';
const API_KEY = require("./secrets");
const URL = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=" + API_KEY;

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

        const container = {
            backgroundColor: "#007ea8",
            "background-image": "linear-gradient(#0091f2, #004b91)",
            width: "20%",
            padding: "10px",
            "margin-top": "100px",
            fontFamily: "Avenir",
            "border-radius": "30px",
            border: "2px solid #ffffff",
            color: "white"
        };

        return (
            <Container style={container}>
                <Row className="justify-content-md-center">
                    <Col><img src={ "http://openweathermap.org/img/wn/" + this.state.forecast.weather[0].icon + "@2x.png" } /></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col><h1 style={{color: "#00376b"}}>{this.state.forecast.name}</h1></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>Currently {this.state.forecast.weather[0].main}</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" style={{fontSize: "60px"}}>{parseInt(this.state.forecast.main.temp)}° C</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>Max:{this.state.forecast.main.temp_max}° Min:{this.state.forecast.main.temp_min}°</Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>Feels like {this.state.forecast.main.feels_like}°</Col>
                </Row>
            </Container>
        )
    }
}
