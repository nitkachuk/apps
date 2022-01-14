import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loader from './Components/Loader/';
import Todo from './Components/Todo/';

const HOC = WrappedComponent => {
  return class extends React.Component  {
    render()  {
      return this.props.loading ? <Loader /> : <WrappedComponent />
    }
  }
}

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
