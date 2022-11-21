import React from 'react';
import Movies from './Movies.js';


class Movie extends React.Component {

  render() {

    return(
      <div id="movies">
        <section id="moiveSection">
          <h3>Top Movies Featuring {this.props.city}</h3>
            <div id='movieRecommendations'>
              {this.props.movies.map((movie, idx) => (
                <Movies
                  title={movie.title}
                  poster={movie.imgPath}
                  overview={movie.overview}
                  rating={movie.averageRating}
                  review={movie.totalReviews}
                  releaseDate={movie.releaseDate}
                  key={idx}/>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Movie;