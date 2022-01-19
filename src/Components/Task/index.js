import { useContext } from "react";
import './style.scss';
import cn from 'classnames';
import { ThemeContext } from '../../Context'; 


function Task(props)   { 
    const changeColorHandler = (e) => {
      props.onColorClick( props.keyValue, props.priority );

      e.preventDefault();
    }

    const theme = useContext( ThemeContext );

    return( 
      <>
        <div 
          className={ cn('task-box', theme.colors[ props.priority ]) }
          onContextMenu = { (e) => changeColorHandler(e) }
        >
            
        <div className={ props.priority ? "text-box-a" : "text-box-b" } >
          { props.text } 
        </div>

          <div className="checkbox-box">
            <input 
              type="checkbox" 
              className="checkbox"
                        
              checked={ !props.priority }

              onChange={ () => props.onCheckboxClick( props.keyValue ) }
            />

              <label>Done</label>
          </div>

          <button onClick={ () => props.onRemoveClick( props.keyValue ) } > Remove </button> 

        </div>
      </>
    );
}


export default Task;