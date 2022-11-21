import React from 'react';


class Map extends React.Component {
  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=${this.props.zoom}&markers=icon:small-red-cutout|${this.props.lat},${this.props.lon}`
    
    return(
      this.props.city_name.length < 1 ?
      <div id="mapImage">
         <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" alt="map of the world" title="map on error or blank"/>
      </div> :
      <div id="mapImage">
        <img src={mapURL} alt={this.props.city_name} title={this.props.city_name}/>
      </div>
    )
  };
};

export default Map;