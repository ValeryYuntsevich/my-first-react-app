import * as React from "react";
import * as styles from "./Spinner.module.css";

const Spinner = () => {
  return <div className={ styles.container }> 
    <div className={ styles.loading }></div>
  </div>;
};

export default Spinner;
