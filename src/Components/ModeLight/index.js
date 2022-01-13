import { Component } from "react";
import './style.scss';
import { ContextChangeMode } from '../../Context'; 

class ModeEng extends Component   {
  render() {
    return( 
      <>
        <ContextChangeMode.Consumer>
          { onChangeLangHandler => (
            <img 
              src="/images/mode_day_button.png" 
              className="ModeButton" 
              alt="ModeButton"
              width={50}
              height={26} 
              onClick={ onChangeLangHandler }
            />
          )}
        </ContextChangeMode.Consumer>
      </>
    );
  }
}

export default ModeEng;