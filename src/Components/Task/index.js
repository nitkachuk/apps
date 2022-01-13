import { Component } from "react";
import './style.scss';
import cn from 'classnames';
import { ThemeContext } from '../../Context'; 


class Task extends Component   { 
    changeColorHandler = (e) => {
      this.props.onColorClick( this.props.keyValue, this.props.priority );

      e.preventDefault();
    }

  render() { 
    return( 
      <>
        <ThemeContext.Consumer>
          { value => (
            <div 
              className={ cn('task-box', value.colors[ this.props.priority ]) }
              onContextMenu = { (e) => this.changeColorHandler(e) }
            >
            
            <div className={ this.props.priority ? "text-box-a" : "text-box-b" } >
              { this.props.text } 
            </div>

              <div className="checkbox-box">
                <input 
                  type="checkbox" 
                  className="checkbox"
                        
                  checked={ !this.props.priority }

                  onChange={ () => this.props.onCheckboxClick( this.props.keyValue ) }
                />

                  <label>Done</label>
              </div>

              <button onClick={ () => this.props.onRemoveClick( this.props.keyValue ) } > Remove </button> 

            </div>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}


export default Task;