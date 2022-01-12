import { Component } from "react";
import './style.scss';


class Header extends Component   {
  render() {
    return( 
      <header>
        
        <div>
          <img src="/images/logo.png" alt="Logo" className="logo" width={250} height={204} />
        </div>

        <h2>Nikolai ToDo App</h2>

      </header>
    );
  }
}


export default Header;