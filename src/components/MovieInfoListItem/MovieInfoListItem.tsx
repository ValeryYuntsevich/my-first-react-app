import * as React from "react";
import * as styles from "./MovieInfoListItem.module.css";

const MovieInfoListItem = ({ movie }: { movie : any }) => {
  return <div className={ styles.info }>
    <div>
      <img
        width="350"
        height="330"
        alt={ movie ? movie.title : null }
        src={ movie ? movie.poster_path : null }
      />
    </div>

    <div className={ styles.mainInfo }>
      <div className={ styles.title }>
        <h1>{ movie ? movie.title : null }</h1>
        <div className={ styles.vote }>
          { movie ? movie.vote_count : null }
        </div>
      </div>
      <div>
        <p>{ movie ? movie.overview : null }</p>
      </div>
    </div>

  </div>
};

export default MovieInfoListItem;