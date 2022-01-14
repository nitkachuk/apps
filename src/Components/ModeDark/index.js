import { Component } from "react";
import './style.scss';
import { ContextChangeMode } from '../../Context'; 

class ModeDe extends Component   {
  render() {
    return( 
      <>
        <ContextChangeMode.Consumer>
          { onChangeLangHandler => (
            <img 
              src="/images/mode_night_button.png" 
              onClick={ onChangeLangHandler }
              className="ModeButton" 
              alt="ModeButton"
              width={50}
              height={26} 
            />
          )}
        </ContextChangeMode.Consumer>
      </>
    );
  }
}

export default ModeDe;