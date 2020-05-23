import * as React from "react";
import * as styles from "./MoviePage.module.css";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import MovieListItem from "../MovieListItem/MovieListItem";

import { getMovieByID, getMovies } from "../../services/api";
import Spinner from "../Spinner/Spinner";

const MoviePage = ({ movieInfo } : { movieInfo: any }) => {
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const InfoMovieByID = getMovieByID(movieInfo);
    InfoMovieByID
      .then(response => {
        if (typeof response === 'string') {
          setLoading(false);
          setErrorMessage(response);
        } else {
          setLoading(false);
          setMovie(response)
        }
      })
  },[])

  useEffect(() => {
    const AllListMovies = getMovies();
    AllListMovies
      .then(response => {
        getFilterItems(response.data)
      })
  },[])

const getFilterItems = (data: any) => {
  const item = data.filter((data: any) => data.id === movieInfo);
  const items = data.filter((data: any) => data.id != movieInfo);
  const filteredMovies = items.filter((movie: any) => item[0].genres.every((filter: any) => movie.genres.includes(filter)));
  setMovies(filteredMovies);
}

  return (
    <div className={ styles.test }>
      <Header
        movieInfo={ movieInfo }
        movie={ movie } 
      />
      <div className={ styles.items }>
        { loading && !errorMessage ? <Spinner /> : errorMessage ?
          <div className={ styles.errorMessage }>{ errorMessage }</div> :
          movies.length > 0 ?
          movies.map((movie) => (
            <MovieListItem 
              key={ movie.id }
              movie={ movie }
            />
            )) :
            <div className={ styles.errorMessage }>List is empty</div>
        }
      </div>
    </div>
  );
};

export default MoviePage;
