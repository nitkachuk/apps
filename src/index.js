import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Todo from "./Components/Todo/";
import { HOC } from "./hoc/WithLoader.js"

const Preloader = HOC( Todo );

const App = () =>  {
  const [ isLoading, setisLoading ] = useState();

  useEffect( () => {
    setisLoading( true );

    const timeout = setTimeout( () => {
      start()
    }, 3000 );

    return () => { clearTimeout( timeout ); }
  }, [] );

  const start = () => {
    setisLoading( false );
  }

  return <Preloader loading={ isLoading } />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
