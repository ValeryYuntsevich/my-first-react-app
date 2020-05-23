import * as React from "react";
import * as styles from "./MovieListItem.module.css";

const MovieListItem = ({ movie, onChangeMovieID = () => {} } : { movie: any, onChangeMovieID?: any}) => {

  return (
    <div className={ styles.movie }>
      <div>
        <img
          width="350"
          height="330"
          alt={ movie.title }
          src={ movie.poster_path }
          onClick={ () => {
            onChangeMovieID(movie.id);
          }}
        />
      </div>

      <div className={ styles.title }>
        <h4>{ movie.title }</h4>
        <p>{ movie.release_date }</p>
      </div>
      <div>
        { movie.genres.map((genre: any, index: any) => (
          <span key={ genre }>{ movie.genres.length === index + 1 ? genre : genre + ' & ' }</span>))
        }
      </div>
    </div>
  );
};

export default MovieListItem;
