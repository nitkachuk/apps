import React from "react";
import "./style.scss";
import cn from "classnames";
import state from "../../store/states";
import { observer } from "mobx-react";


const Caption: React.FC = () =>  {
  const { mode, modeNames, themeDark, theme, buttonClearAllHandler, buttonSetModeHandler } = state;

  return( 
    <div className="caption">

      <div className="caption-mode" onClick={ () => buttonSetModeHandler() }>
        <h2> Todos: {modeNames[ mode ]} </h2>
      </div>

        <button 
          className={ cn("button", theme.button[ themeDark ]) } 
          onClick={ () => buttonClearAllHandler() } 
        > 
          Clear all 
        </button>

    </div>
  );
}


export default observer( Caption );