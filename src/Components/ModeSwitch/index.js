import { useContext } from "react";
import './style.scss';
import ModeDark from '../ModeDark'; 
import ModeLight from '../ModeLight'; 
import { ThemeContext } from '../../Context'; 


function ModeSwitch()   {
  const theme = useContext( ThemeContext );
    return( 
      <>
        { theme.id
          ? <ModeDark />
          : <ModeLight />
        }
      </>
    );
}


export default ModeSwitch;