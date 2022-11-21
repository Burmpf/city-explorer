import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
      <>
        <Card key={this.props.idx}>
          <Card.Img variant="top" id={this.props.title} alt={this.props.title} src={this.props.poster}/>
          <Card.Body>
            <div id="title">
              <Card.Title>{this.props.title}</Card.Title>
            </div>
            <div id="summary">
              <p>Summary:</p>
              <p>{this.props.overview}</p>
            </div>
            <div id="rating">
              <p>Rating:</p> 
              <p>{this.props.rating}</p>
            </div>
            <div id="reviews">
              <p>Reviews:</p> 
              <p>{this.props.review}</p>
            </div>
            <div id="releaseDate">
              <p>Release Date:</p>
              <p>{this.props.releaseDate}</p>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  };
};

export default Movies;