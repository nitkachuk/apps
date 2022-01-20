import { useContext } from "react";
import "./style.scss";
import { ThemeContext, WrapperCaptionContext } from "../../Context"; 
import PropTypes from "prop-types";
import cn from "classnames";


function Caption()   {
  const theme = useContext( ThemeContext );
  const { onClearClick, onSetModeClick, mode } = useContext( WrapperCaptionContext );
    return( 
      <>
        <div className="caption">

          <div className="caption-mode" onClick={ () => onSetModeClick() }>
            <h2> Todos: {mode } </h2>
          </div>

            <button 
              className={ cn("button", theme.button) } 
              onClick={ () => onClearClick() } 
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