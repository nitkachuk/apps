import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Todo from "./Components/Todo/";
import { HOC } from "./utils/hoc.js"

const Preloader = HOC( Todo );

function App()  {
  const [ isLoading, setLoading ] = useState( true );

  const timer = setTimeout(
    () => start(),
    3000
  );

  const start = () => {
    setLoading( false );
  }

  useEffect( () => {
    return () => {
      clearTimeout( timer );
    }
  });

  return <Preloader loading={ isLoading } />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
