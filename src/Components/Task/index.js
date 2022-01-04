import { Component } from "react";
import './style.scss';


class Task extends Component   { 

      constructor(props) {

          super(props);

          this.state = {

              colors : [ "lightgreen", "white", "#ffff66", "#eba5a5" ],

          }

      }
      
      changeColor = (e) => {
        
        this.props.onToggleColor( this.props.key_value, this.props.priority );

        e.preventDefault();

      }


  render() { 

    return( 

      <div 
        className="task-box" 
        style={{ backgroundColor: this.state.colors[ this.props.priority ] }} 
        onContextMenu = { (e) => this.changeColor(e) }
      >
        
          { this.props.priority
            ? <div className="text-box" >
                { this.props.text } 
              </div>
            : <div className="text-box" style={{ textDecoration: 'line-through' }} >
              { this.props.text } 
              </div>
          }

          <div className="checkbox-box">
              <input 
                type="checkbox" 
                style={{ cursor: 'pointer' }} 
                    
                checked={ !this.props.priority }

                onChange={ () => this.props.onToggleCheckbox( this.props.key_value ) }
              />

                <div>Done</div>
          </div>



          <div> 
            <button onClick={ () => this.props.onRemove( this.props.key_value ) } > Remove </button> 
          </div>

      </div>

    );

  }


}


export default Task;