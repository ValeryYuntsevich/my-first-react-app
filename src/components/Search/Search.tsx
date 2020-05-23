import * as React from "react";
import * as styles from "./Search.module.css";

import { useState } from "react";

const Search = ({ onChangeMovieID, movie } : { movie: any, onChangeMovieID: any }) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearchInputChanges = (e:any) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue('');
  }

  const callSearchFunction = (e: any) => {
    const movieInfo = movie.filter((v:any) => v.title === searchValue)
    e.preventDefault();
    resetInputField();
    onChangeMovieID(movieInfo[0].id);
  }

  return <div> 
            <form className={ styles.search }>
              <input
                value={ searchValue }
                onChange={ handleSearchInputChanges }
                type="text"
              />
              <input onClick={ callSearchFunction } type="submit" />
            </form>
         </div>;
};

export default Search;