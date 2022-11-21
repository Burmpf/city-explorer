import React from 'react';
import Alert from 'react-bootstrap/Alert';


class Location extends React.Component {

  render() {

    return(
      this.props.isError === true ? 
      <Alert variant="danger">
        <Alert.Heading>Oh no! There was an error.</Alert.Heading>
        <p>{this.props.errorMessage}</p>
      </Alert> :
      this.props.display_name.length > 1 ?
      <div id="locationHeader">
        <h2>{this.props.display_name}</h2>
        <h3>Latitude: {this.props.latitude}</h3>
        <h3>Longitude: {this.props.longitude}</h3>
      </div> : <h2>Let's Get Exploring!</h2>
    );
  }
}

export default Location;