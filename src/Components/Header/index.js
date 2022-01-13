import React, { Component } from "react";
import './style.scss';
import { ThemeContext } from '../../Context/';

class Header extends Component   {
  render() {
    return( 
      <header>
        
        <div>
          <ThemeContext.Consumer>
            { value => (
              <img src={ `/images/${value.logo}` } alt="Logo" className="logo" width={250} height={204} />
            )}
          </ThemeContext.Consumer>
        </div>

        <h2> Nikolai ToDo App </h2>

      </header>
    );
  }
}

export default Header;