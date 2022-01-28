import React from "react";
import "./style.scss";


const Loader: React.FC = () => { 
  const loaderImage: string = "/images/loader.gif";

  return( 
    <div className="loader">
      <img src={ loaderImage } alt="Loader" />
    </div>
  );
}


export default Loader;