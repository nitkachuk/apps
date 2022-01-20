import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../Context"; 
import PropTypes from "prop-types";
import cn from "classnames";


function Caption(props)   {
  const theme = useContext( ThemeContext );
    return( 
      <>
        <div className="caption">

          <div className="caption-mode" onClick={ () => props.onSetModeClick() }>
            <h2> Todos: { props.mode } </h2>
          </div>

            <button 
              className={ cn("button", theme.button) } 
              onClick={ () => props.onClearClick() } 
            > 
              Clear all 
            </button>

        </div>
      </>
    );
}

Caption.propTypes = {
  mode: PropTypes.string,
  onSetModeClick: PropTypes.func,
  onClearClick: PropTypes.func
}


export default Caption;