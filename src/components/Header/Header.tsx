import * as React from "react";
import * as styles from "./Header.module.css";

import Search from "../Search/Search";
import MovieInfoListItem from "../MovieInfoListItem/MovieInfoListItem";


const Header = ({ movieInfo, movie, onChangeMovieID = () => {} }: { movieInfo: any, movie: any, onChangeMovieID?: any }) => {
  return <div className={ styles.header }> 
    { movieInfo ? 
      <MovieInfoListItem movie={ movie } 
      /> : 
      <Search 
        onChangeMovieID={ onChangeMovieID }
      /> 
    }
  </div>;
};

export default Header;
