import React from "react";
import "./style.scss";
import state from "../../store/states";
import { observer } from "mobx-react";


const ThemeMode: React.FC = () =>  {
  const { themeDark, theme, toggleTheme } = state;
  const toggleButtonImage: string = theme.toggleModeButton[ themeDark ];

  return( 
    <img 
      src={ toggleButtonImage } 
      onClick={ () => toggleTheme() }
      className="ModeButton" 
      alt="ModeButton"
      width={50}
      height={26} 
    />
  );
}


export default observer( ThemeMode );