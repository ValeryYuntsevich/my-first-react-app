import * as React from "react";
import * as styles from "./Info.module.css";


const InfoMovie = ({ movieInfo }: { movieInfo : any }) => {
  return  <div className={ styles.info }>
    <div>
      <img
        width="350"
        height="330"
        alt={ movieInfo ? movieInfo.title : null }
        src={ movieInfo ? movieInfo.poster_path : null }
      />
    </div>

    <div className={ styles.mainInfo }>
      <div className={ styles.title }>
        <h1>{ movieInfo ? movieInfo.title : null }</h1>
        <div className={ styles.vote }>
          { movieInfo ? movieInfo.vote_count : null }
        </div>
      </div>
      <div>
        <p>{ movieInfo ? movieInfo.overview : null }</p>
      </div>
    </div>

  </div>
};

export default InfoMovie;