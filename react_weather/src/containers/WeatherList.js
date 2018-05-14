import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    {cityData.list[0].main.temp}
                </td>
                <td>
                    {cityData.list[0].main.pressure}
                </td>
                <td>
                    {cityData.list[0].main.humidity}
                </td>
            </tr>
        )
    }

  render() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>  
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        </div>
    )
  }
}

function mapStateToProps({weather}){
    return { weather } // from reducer
}

export default connect(mapStateToProps)(WeatherList);