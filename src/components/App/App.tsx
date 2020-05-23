import * as React from "react";
import * as styles from "./App.module.css";
import { useState } from "react";

import MoviePage from "../MoviePage/MoviePage";
import MoviesPage from "../MoviesPage/MoviesPage";

const App = () => {
  const [movieInfo, setMovieInfo] = useState();

  const onChangeMovieID = (id: any )=> {
    console.log(id)
    setMovieInfo(id);
  };

  return (
    <div>
      { movieInfo ? 
        <MoviePage 
          movieInfo = { movieInfo } 
        /> : 
        <MoviesPage
          movieInfo = { movieInfo }
          onChangeMovieID={ onChangeMovieID }
        /> }
    </div>
  );
};

export default App;
