import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Todo from './Components/Todo/';
import { HOC } from './utils/hoc.js'

const Preloader = HOC( Todo );

function App(props)  {
  const [ loading, setLoading ] = useState( true );

  const timer = setTimeout(
    () => start(),
    100
  );

  const start = () => {
    setLoading( false );
    clearTimeout( timer );
  }

  return <Preloader loading={ loading } />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
