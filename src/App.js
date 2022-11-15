import { render } from "@testing-library/react";
import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:'',
      city: '',
      cityData: {},

    }
  }

handleCityInput =(event) => {
  this.setState({
    city: event.target.value
  })
}


handleCitySubmit = async (event) => {
  event.preventDefault();
  console.log(this.state.city);
  //get data from API
 let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
  //save data to somewhere
  console.log(locationInfo.data[0]);

  this.setState({
    cityData: locationInfo.data[0],
    // lat: locationInfo.data[0].lat,
    // lon: locationInfo.data[0].lon,
    // isError: false
  });
}



  render() {


    return(
      <>
      <h1> Data from an API</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Pick a City
          <input onClick={this.handleCitySubmit} name="city" type ="text"></input>
        </label>
        <button onClick={this.handleCitySubmit}>Explore!</button>
      </form>
      <ul>
        {}
      </ul>
      </>
    );
  }
}

export default App;