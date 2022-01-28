import React, { useState, useEffect } from "react";
import Todo from "../Todo";
import { useLoader } from "../../hooks/useLoader";
import { IPropsPreloader } from "./types";


const App: React.FC = () =>  {
  const [ isLoading, setisLoading ] = useState<boolean>( true );

  useEffect( () => {
    const timeout = setTimeout( () => {
      setisLoading( false );
    }, 3000 );

    return () => clearTimeout( timeout );
  }, [] );

  const Preloader: React.FC<IPropsPreloader> = useLoader( Todo );

  return <Preloader loading={ isLoading } />
}


export default App;