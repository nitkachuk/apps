import { useContext } from "react";
import './style.scss';
import { ThemeContext } from '../../Context'; 


function Caption(props)   {
  const theme = useContext( ThemeContext );
    return( 
      <>
        <div className="caption">

          <div className="caption-mode" onClick={ () => props.onSetModeClick() }>
            <h2> Todos: { props.mode } </h2>
          </div>

            <button 
              className={ theme.button } 
              onClick={ () => props.onClearClick() } 
            > 
              Clear all 
            </button>

        </div>
      </>
    );
}


export default Caption;