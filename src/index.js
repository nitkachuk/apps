import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Components/Todo/';
import { HOC } from './utils/hoc.js'

const Preloader = HOC( Todo );

class App extends React.Component  {
  constructor(props)  {
    super(props);

    this.state = {
      loading: true
    }

    this.timer = setTimeout(
      () =>  this.setState({ loading: false }), 
      1000
    );
  }

  render()  {
    return <Preloader loading={ this.state.loading } />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
