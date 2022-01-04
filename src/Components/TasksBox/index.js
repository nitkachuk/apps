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
                key = { task.key }
                key_value = { task.key }
                text = { task.text }
                priority = { task.priority }
                onSend={ this.props.onSend }
                onRemove={ this.props.onRemove }
                onToggleCheckbox = { this.props.onToggleCheckbox }
                onToggleColor = { this.props.onToggleColor }
            />
          ))
        } 

        {
          this.props.tasks.length
          ? ''
          : <center> Organize your tasks and do more ! </center>
        }

      </div>

    );

  }


}


export default TasksBox;