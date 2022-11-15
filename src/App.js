import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: '',
      cityData: {},
      isError: '',


    }
  }

  handleCityInput = (event) => {
    this.setState({
      search: event.target.value
    });
  }


  handleCitySubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(this.state.search);
      //get data from API
      let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.search}&format=json`);
      //save data to somewhere
      console.log(locationInfo.data[0]);

      this.setState({
        cityData: locationInfo.data[0],
        isError: false,
        // lat: locationInfo.data[0].lat,
        // lon: locationInfo.data[0].lon,
        // isError: false
      });
    } catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        errorMessage: error.message,
        isError: true,

      });
    }
  }



  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`;

    return (
      <>
        <h1> City Exploration</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label>Pick a City
            <input onChange={this.handleCityInput} name="city" type="text" placeholder="City, State"></input>
          </label>
          <button type="submit" >Explore!</button>
        </form>
        <p>{this.state.cityData.display_name}</p>
        <p>Latitude: {this.state.cityData.lat}</p>
        <p>Longitude: {this.state.cityData.lon}</p>
        <img
          className="modalMap"
          src={mapURL}
          alt=''
        />
      </>
    );
  }
}

export default App;