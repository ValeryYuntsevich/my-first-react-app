import * as React from "react";
import * as styles from "./App.module.css";
import Header from "../Header/Header";
import Movie from "../Movie/Movie";
import { useState, useEffect } from "react";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState();

  const onChangeValueHandler = (id: any )=> {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response => response.json())
    .then(jsonResponse => {
      setMovieInfo(jsonResponse);
    });
  };

  useEffect(() => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.data);
      });
  },[])

    return (
      <div>
        <Header movieInfo={ movieInfo }/>
        {name}
        <div className={ styles.items }>
          {
            movies.map((movie) => (
              <Movie key={ movie.id } movie={ movie } onChangeValue={onChangeValueHandler} />
            ))
          }
        </div>
      </div>
    );
};

export default App;
