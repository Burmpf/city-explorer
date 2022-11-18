import React from 'react';


class WeatherDay extends React.Component {

  render() {

    if(!this.props.isDailyForecastShown) {
      return <div />
    }

    return (
      
      <>
          <img
            className="d-block w-100"
            src={this.props.dailyForecastImg.URL}
            alt={this.props.dailyForecastImg.alt}
          />
            <h3>Date: {this.props.forecast.date}</h3>
            <p>{this.props.forecast.description}</p>
            <p>High: {this.props.forecast.high}</p>
            <p>Low: {this.props.forecast.low}</p>
            <p>Wind: {this.props.forecast.wind}</p>
      </>   
    )
  }
}

export default WeatherDay;