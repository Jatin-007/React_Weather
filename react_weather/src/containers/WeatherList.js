import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
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