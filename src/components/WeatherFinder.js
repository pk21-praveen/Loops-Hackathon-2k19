import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "7a711b6bd141087c927901dd0ea033ac";

class WeatherFinder extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();


        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&appid=' + API_KEY + '&units=metric');
        const data = await api_call.json();


        if (city && country) {


            if (data.cod == 404) {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    windSpeed: undefined,
                    error: "Input location cannot be found. Please check spelling."
                });
            } else {
                console.log(data);


                this.setState({
                    temperature: data.list[0].main.temp + '°C',
                    city: data.city.name,
                    country: data.city.country,
                    humidity: data.list[0].main.humidity,
                    description: data.list[0].weather[0].description,
                    windSpeed: data.list[0].wind.speed + ' km/h',
                    error: ""
                });
            }
        } else {


            this.setState({
                temperature: "Probably Hot",
                city: "Hmmmmmmmmmmmm",
                country: "Is this in Africa?",
                humidity: "Wait this isn't the same thing as temperature??",
                description: "I don't know, maybe enter a value",
                windSpeed: "WHOOSH",
                error: ""
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        windSpeed={this.state.windSpeed}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherFinder;
