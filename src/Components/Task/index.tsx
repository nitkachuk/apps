import React from "react";
import "./style.scss";
import cn from "classnames";
import state from "../../store/states";
import { observer } from "mobx-react";
import { ITaskProps } from "./types";


const Task: React.FC<ITaskProps> = (props) =>  { 
  const { keyValue, text, priority } = props;
  const { themeDark, theme, 
          buttonRemoveTaskHandler, checkboxHandler, colorHandler } = state;

  const changeColorHandler = (e) => {
    colorHandler( keyValue, priority );
    e.preventDefault();
  }

  return( 
    <>
      <div 
        className={ cn("task-box", theme.colors[ themeDark ][ priority ] ) }
        onContextMenu = { (e) => changeColorHandler(e) }
      >
            
      <div className={ priority ? "text-box-a" : "text-box-b" } >
        { text } 
      </div>

        <div className="checkbox-box">
          <input 
            type="checkbox" 
            className="checkbox"
                        
            checked={ !priority }

            onChange={ () => checkboxHandler( keyValue ) }
          />

            <label>Done</label>
        </div>

        <button onClick={ () => buttonRemoveTaskHandler( keyValue ) } > Remove </button> 
      </div>
    </>
  );
}


export default observer( Task );