import { useContext } from "react";
import './style.scss';
import { ContextChangeMode } from '../../Context'; 


function ModeDark()   {
  const onChangeLangHandler = useContext( ContextChangeMode );
    return( 
      <>
        <img 
          src="/images/mode_night_button.png" 
          onClick={ onChangeLangHandler }
          className="ModeButton" 
          alt="ModeButton"
          width={50}
          height={26} 
        />
      </>
    );
}


export default ModeDark;