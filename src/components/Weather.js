import React from 'react'
import './weatherDay'

    let cloudImg = {
      URL: 'https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
      alt: 'cloudy image'
    }
    let snowImg = {
      URL: 'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2312&q=80',
      alt: 'snowy image'
    }
    let rainImg = {
      URL: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      alt: 'rainy image'
    }
    let sunImg = {
      URL: 'https://images.unsplash.com/photo-1587124318790-ad54e29fec80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
      alt: 'sunny image'
    }
    let backupImg = {
      URL: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2275&q=80',
      alt: 'backup image'
    }

    let srcImg = description => {
      if(description === undefined){
        return backupImg
      } else if(description.includes('Cloud') || description.includes('cloud')){
        return cloudImg;
      } else if (description.includes('Flurries') || description.includes('Snow') || description.includes('snow')){
        return snowImg;
      } else if (description.includes('Rain') || description.includes('rain')){
        return rainImg;
      } else if (description.includes('Sun') || description.includes('Clear') || description.includes('clear')){
        return sunImg;
      } else {
        return backupImg;
      }
    }

    let carouselItems = this.props.forecast.map( day => {
      return (
        <>
          <img
            className="d-block w-100"
            src={srcImg(day.description).URL}
            alt={srcImg(day.description).alt}
          />
          
            <h3>{day.date}</h3>
            <p>{day.description}</p>
        </>
      
      )});


      let dailyForecast = this.props.forecast[0];
      let dailyForecastImg = srcImg(dailyForecast.description);

    return (
      <>
      {this.props.cityData.display_name}
          
          
          isDailyForecastShown={this.props.isDailyForecastShown}
          handleCloseDailyForecast={this.props.handleCloseDailyForecast}
          forecast={this.props.forecast[0]}
          cityData={this.props.cityData}
          dailyForecastImg={dailyForecastImg}
        />
      </>
    );

export default Weather
