import { useContext } from "react";
import "./style.scss";
import { ThemeContext, ContextChangeMode } from "../../Context"; 


function ModeDark()   {
  const theme = useContext( ThemeContext );
  const onChangeLangHandler = useContext( ContextChangeMode );
  const toggleButtonImage = theme.toggleModeButton;
    return( 
      <>
        <img 
          src={ toggleButtonImage } 
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