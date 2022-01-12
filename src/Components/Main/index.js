import { Component } from "react";
import './style.scss';
import Input from '../Input/';
import TasksBox from '../TasksBox/';


class Main extends Component   {
  render() {
    return( 
      <main>
        
        <Input onSendClick={ this.props.onSendClick } />

        <TasksBox 
          tasks={ this.props.tasks } 
          onSendClick={ this.props.onSendClick }
          onRemoveClick={ this.props.onRemoveClick }
          onCheckboxClick={ this.props.onCheckboxClick }
          onColorClick={ this.props.onColorClick }
        />

      </main>
    );
  }
}


export default Main;