import React, { useState, useEffect } from "react";
import Todo from "../Todo";
import { useLoader } from "../../hooks/useLoader";
import { IPropsPreloader } from "./types";


const App: React.FC = () =>  {
  const { loaderHandler, Component } = useLoader(Todo);

  useEffect( () => {
    const timeout = setTimeout( () => {
      loaderHandler( false );
    }, 3000 );

    return () => clearTimeout( timeout );
  }, [] );

  return Component
}


export default App;