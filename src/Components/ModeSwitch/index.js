import { Component } from "react";
import './style.scss';
import ModeDark from '../ModeDark'; 
import ModeLight from '../ModeLight'; 
import { ThemeContext } from '../../Context'; 

class ModeSwitch extends Component   {
  render() {
    return( 
      <>
        <ThemeContext.Consumer>
          { themeMode => (
            themeMode.id
              ? <ModeDark />
              : <ModeLight />
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default ModeSwitch;