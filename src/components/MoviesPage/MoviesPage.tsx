import * as React from "react";
import { useState, useEffect } from "react";

import MovieListItem from "../MovieListItem/MovieListItem";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

import * as styles from "./MoviesPage.module.css";
import { getMovies } from "../../services/api";

const MoviesPage = ({ movieInfo = null, onChangeMovieID } : { movieInfo: any, onChangeMovieID: any }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 console.log()
  useEffect(() => {
    const AllListMovies = getMovies();
    AllListMovies
      .then(response => {
        if (typeof response === 'string') {
          setLoading(false);
          setErrorMessage(response);
        } else {
          setLoading(false);
          setMovies(response.data)
        }
      })
  },[])

  return (
    <div>
      <Header 
        movieInfo={ movieInfo }
        movie={ movies }
        onChangeMovieID={ onChangeMovieID }
      />
      <div className={ styles.items }>
        { loading && !errorMessage ? <Spinner /> : errorMessage ?
          <div className={ styles.errorMessage }>{ errorMessage }</div> :
          movies.length > 0 ?
          movies.map((movie) => (
            <MovieListItem 
              key={ movie.id }
              movie={ movie }
              onChangeMovieID={ onChangeMovieID }
            />
            )) :
            <div className={ styles.errorMessage }>List is empty</div>
        }
      </div> 
    </div>
  );
};

export default MoviesPage;
