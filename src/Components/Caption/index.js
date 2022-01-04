import { Component } from "react";
import './style.scss';


class Caption extends Component   {


  render() {


    return( 

      <div className="caption">
        
          <div className="caption-mode" onClick={ () => this.props.onSetMode() }>
            <h2> Todos: { this.props.mode } </h2>
          </div>

          <div> 
            <button onClick={ () => this.props.onClear() } > Clear all </button>
          </div>

      </div>

    );

  }


}


export default Caption;