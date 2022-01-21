import { useContext } from "react";
import "./style.scss";
import cn from "classnames";
import { ThemeContext } from "../../Context"; 
import PropTypes from "prop-types";
import { WrapperMainContext } from "../../Context"; 


const Task = (props) =>  { 
  const { keyValue, text, priority } = props;
  const theme = useContext( ThemeContext );
  const { onRemoveClick, onCheckboxClick, onColorClick } = useContext( WrapperMainContext );

  const changeColorHandler = (e) => {
    onColorClick( keyValue, priority );
    e.preventDefault();
  }

  return( 
    <>
      <div 
        className={ cn("task-box", theme.colors[ priority ]) }
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

            onChange={ () => onCheckboxClick( keyValue ) }
          />

            <label>Done</label>
        </div>

        <button onClick={ () => onRemoveClick( keyValue ) } > Remove </button> 
      </div>
    </>
  );
}

Task.propTypes = {
  keyValue: PropTypes.number,
  text: PropTypes.string,
  priority: PropTypes.number,
  onRemoveClick: PropTypes.func,
  onCheckboxClick: PropTypes.func,
  onColorClick: PropTypes.func
}


export default Task;