import * as React from "react";
import * as styles from "./Header.module.css";
import InfoMovie from "../Info/Info";


const Header = ({ movieInfo }: { movieInfo : any }) => {
  return <div className={styles.header}> 
          { movieInfo ? <InfoMovie movieInfo={ movieInfo } /> : null}
         </div>;
};

export default Header;