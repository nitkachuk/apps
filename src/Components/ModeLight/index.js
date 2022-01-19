import { useContext } from "react";
import './style.scss';
import { ContextChangeMode } from '../../Context'; 


function ModeLight()   {
  const onChangeLangHandler = useContext( ContextChangeMode );
    return( 
      <>
        <img 
          src="/images/mode_day_button.png" 
          className="ModeButton" 
          alt="ModeButton"
          width={50}
          height={26} 
          onClick={ onChangeLangHandler }
        />
      </>
    );
}


export default ModeLight;