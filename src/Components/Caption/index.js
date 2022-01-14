import { Component } from "react";
import './style.scss';
import { ThemeContext } from '../../Context'; 

class Caption extends Component   {
  render() {
    return( 
      <>
        <ThemeContext.Consumer>
          { value => (
            <div className="caption">
              
              <div className="caption-mode" onClick={ () => this.props.onSetModeClick() }>
                <h2> Todos: { this.props.mode } </h2>
              </div>

                <button 
                  className={ value.button } 
                  onClick={ () => this.props.onClearClick() } 
                > 
                  Clear all 
                </button>

            </div>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}


export default Caption;