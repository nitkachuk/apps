import React from "react";
import './Refs.scss';
import styled from "styled-components";

class Refs extends React.Component   {
  constructor(props)  {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();
    this.form = React.createRef();

    this.state = {
      access: 0
    }
  }

  componentDidMount = () => {
    this.username.current.focus();
  }

  submitHandle = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    
    if( username.trim() === "" )  { 
      this.accessChange( 0 );
      alert( "Пустой логин" );
      return;
    }

    if( password.length < 6 )  { 
      this.accessChange( 0 );
      alert( "Пароль должен быть длиннее 6 символов" );
      return;
    }

    this.accessChange( 1 );
  }

  accessChange = (val) => {
    this.setState( { access: val } );
  }

  render() {

    const access = this.state.access;
    
    const StyleConstructor = styled.div`
      width: 360px;
      height: 254px;
    `;
    const AccessAllowed = styled(StyleConstructor)`
      background-image: url( /images/access_allowed.png );
    `;
    const AccessDenied = styled(StyleConstructor)`
      background-image: url( /images/access_denied.png );
    `;

    return( 
      <div className="box">
        { access
          ? <AccessAllowed></AccessAllowed>
          : <AccessDenied></AccessDenied>
        }
        <form onSubmit={ this.submitHandle }>
          <div>
            <label> Username: </label>
            <input type="text" ref={ this.username } />
          </div>
          <div>
            <label> Password: </label>
            <input type="text" ref={ this.password } />
          </div>
            <button> Submit </button>
        </form>
      </div>
    );
  }
}


export default Refs;
