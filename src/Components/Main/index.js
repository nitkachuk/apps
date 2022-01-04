import { Component } from "react";
import './style.scss';
import Input from '../Input/';
import TasksBox from '../TasksBox/';


class Main extends Component   {


  render() {


    return( 

      <main>
        
          <Input onSend={ this.props.onSend } />

          <TasksBox 
              tasks={ this.props.tasks } 
              onSend={ this.props.onSend }
              onRemove={ this.props.onRemove }
              onToggleCheckbox = { this.props.onToggleCheckbox }
              onToggleColor = { this.props.onToggleColor }
          />

      </main>

    );

  }


}


export default Main;