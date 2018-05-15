import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressure = cityData.list.map(weather => weather.main.pressure)

        console.log(temps)

        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Sparklines height={80} width={160} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={80} width={160} data={pressure}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={80} width={160} data={humidity}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
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