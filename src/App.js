
import React from 'react';
import Location from './components/Location.js';
import Weather from './components/Weather.js';
import Movie from './components/Movie.js';
import Map from './components/Map';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: '',
      searchCity: '',
      display_name: '',
      lat: '',
      lon: '',
      zoom: 12,
      isError: false,
      errorMessage: '',
      weatherData: '',
      movieData: ''
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(`search: ${this.state.searchCity}`);
      
      // API data
      let key = process.env.REACT_APP_LOCATIONIQ_API_KEY;
      let location = `https://us1.locationiq.com/v1/search?key=${key}&q=${this.state.searchCity}&format=json`;
      
      let locationData = await axios.get(location);

      //save data to state
      console.log('location data:', locationData.data[0]);
      this.setState({
        apiData: locationData.data[0],
        display_name: locationData.data[0].display_name,
        lat: locationData.data[0].lat,
        lon: locationData.data[0].lon,
        isError: false
      },this.handleAPI);

    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    }
  }

  handleWeather = async () => {
    try{  
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.lat}&lon=${this.state.lon}`;
      
      let weatherData = await axios.get(weatherURL);
      console.log(weatherData);
      this.setState({
        weatherData: weatherData.data
      });
    } catch(error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    };
  };

  handleAPI = () => {
    this.handleWeather();
    this.handleMovie();
  };

  handleMovie = async () => {
    try{  
      let movieURL = `${process.env.REACT_APP_SERVER}/movie?search=${this.state.searchCity}`;
      
      let movieData = await axios.get(movieURL);
      console.log(movieData);
      this.setState({
        movieData: movieData.data
      });
    } catch(error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    };
  };

  handleCityInput = (e) => {
    console.log(this.state.searchCity);
    this.setState ({
      searchCity: e.target.value
    });
  };

render() {
  console.log(this.state.weatherData);
  return (
  <>
    <Form onSubmit={this.handleSubmit}>
      <Form.Label htmlFor="cityInput">
        <Form.Control id="cityInput" placeholder="Enter City" size="sm" onChange={this.handleCityInput}/>
      </Form.Label>
      <Button type="submit" variant="primary">Explore!</Button>
    </Form>
    <Location
      isError={this.state.isError}
      errorMessage={this.state.errorMessage}
      display_name={this.state.display_name}
      latitude={this.state.lat}
      longitude={this.state.lon}/>
    <Map
      city_name={this.state.display_name}
      lat={this.state.lat}
      lon={this.state.lon}
      zoom={this.state.zoom}/>
    { this.state.weatherData && <Weather
      weather={this.state.weatherData}
      city={this.state.searchCity}/>}
      {this.state.movieData && <Movie 
      movies={this.state.movieData}
      city={this.state.searchCity}/>}
  </>
  );
};
};

export default App;






// import React from "react";
// import './App.css';
// import Movies from './components/Movie.js';
// import Weather from './components/Weather.js';
// import axios from 'axios';
// import Alert from 'react-bootstrap/Alert'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       search: '',
//       cityData: {},
//       isError: '',
//       weather: [],

//     }
//   }

//   handleCityInput = (event) => {
//     this.setState({
//       search: event.target.value
//     });
//   }

//   handleWeather = async (e) => {
//     e.preventDefault();
//     let url = `${this.process.env.REACT_APP_SERVER}`
//     let weather = await axios.get();
//   }


//   handleCitySubmit = async (event) => {
//     try {
//       event.preventDefault();
//       console.log(this.state.search);
//       //get data from API
//       let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.search}&format=json`);
//       //save data to somewhere
//       console.log(locationInfo.data[0]);

//       this.setState({
//         cityData: locationInfo.data[0],
//         isError: false,
//         // lat: locationInfo.data[0].lat,
//         // lon: locationInfo.data[0].lon,
//         // isError: false
//       }, this.getWeather);
//     } catch (error) {
//       console.log('error: ', error);
//       console.log('error.message: ', error.message);
//       this.setState({
//         errorMessage: error.message,
//         isError: true,

//       });
//     }
//   }

//   getWeather = async () => {
//     try {
//       let url = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.search}`
//       let weatherResponse = await axios.get(url)
//       this.setState({
//         weather: weatherResponse.data
//       })
//     } catch (e) {
//       console.log(e.message);
//     }
//   }


//   handleGetMovies = async (e) => {
//     e.preventDefault();
//     let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?queriedCity=${this.state.city}`);
//     this.setState({
//       movies: movieData.data,
//       isMoviesShown: true,
//     })
//   }

//   render() {

//     let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`;

//     let differentCity = (
//       <>
//         <img
//           className="modalMap"
//           src={mapURL}
//           alt={this.state.cityData.name + 'map'}
//         />
//         <li>{this.state.cityData.display_name}</li>
//         <li>Latitude: {this.state.cityData.lat}</li>
//         <li>Longitude: {this.state.cityData.lon}</li>
//       </>
//     );

//     return (
//       <>
//         <h1> City Exploration</h1>
//         <form onSubmit={this.handleCitySubmit}>
//           <label>Pick a City
//             <input onChange={this.handleCityInput} name="city" type="text" placeholder="City, State"></input>
//           </label>
//           <button type="submit">Explore!</button>
//           <ul>
//             {this.state.cityData.display_name && differentCity}
//           </ul>

//           {this.state.weather.map((day) => (
//             <>
//               <p>date: {day.date}</p>
//               <p>Description: {day.description}</p>
//             </>
//           ))}
//           <Weather
//             forecast={this.state.forecast}
//             cityData={this.state.cityData}
//             isDailyForecastShown={this.state.isDailyForecastShown}
//             handleCloseDailyForecast={this.handleCloseDailyForecast}
//           />
//           {this.state.isMoviesShown ? <Movies movies={this.state.movies} cityName={this.state.city} isMoviesShown={this.state.isMoviesShown} handleCloseMovies={this.handleCloseMovies} /> : <></>}
//           {this.state.isError ?
//             <Alert className="alert" variant="danger">
//               <Alert.Heading>Error: Something went wrong!</Alert.Heading>
//               <p>{this.state.errorMsg}</p>
//             </Alert> : <p className="alert"></p>}
//         </form>
//       </>
//     );
//   }
// }

// export default App;