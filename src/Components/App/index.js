import { useState, useEffect } from "react";
import Todo from "../Todo/";
import { HOC } from "../../hoc/WithLoader.js"


const Preloader = HOC( Todo );

const App = () =>  {
  const [ isLoading, setisLoading ] = useState( true );

  useEffect( () => {
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


export default App;
