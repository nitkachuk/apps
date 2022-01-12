import { Component } from "react";
import './style.scss';
import Task from '../Task/';


class TasksBox extends Component   {
  render() {
    return( 
      <div className="tasks-box">

        { this.props.tasks
          .map( ( task ) => (

            <Task 
              key={ task.key }
              keyValue={ task.key }
              text={ task.text }
              priority={ task.priority }
              onSendClick={ this.props.onSendClick }
              onRemoveClick={ this.props.onRemoveClick }
              onCheckboxClick={ this.props.onCheckboxClick }
              onColorClick={ this.props.onColorClick }
            />
          ))
        } 

        {
          !this.props.tasks.length && <div className="holder"> Organize your tasks and do more ! </div>
        }

      </div>
    );
  }
}


export default TasksBox;