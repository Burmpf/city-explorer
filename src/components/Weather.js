import React from 'react';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {

  render() {
    return(
      <div id="Forecast">
        <section>
          <h2>3 Day Forecast for {this.props.city}</h2>
            <div id='weather'>
              {this.props.weather.map((day, idx) => (
              <WeatherDay
                date={day.date}
                fullDescription={day.fullDescription}
                />
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Weather;
