import * as React from "react";
import * as styles from "./Search.module.css";

import { useState } from "react";

const Search = ({ onChangeMovieID } : { onChangeMovieID: any }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e:any) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue('');
  }

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    resetInputField();
    onChangeMovieID(searchValue);
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