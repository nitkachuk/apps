import { Component } from "react";
import './style.scss';


class Loader extends Component   { 
  render() { 
    return( 
      <>
        <img src="/images/loader.gif" />
      </>
    );
  }
}


export default Loader;