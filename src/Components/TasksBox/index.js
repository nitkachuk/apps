import "./style.scss";
import Task from "../Task/";
import PropTypes from "prop-types";


function TasksBox(props)   {
    return( 
      <div className="tasks-box">

        { props.tasks
          .map( ( task ) => (

            <Task 
              key={ task.key }
              keyValue={ task.key }
              text={ task.text }
              priority={ task.priority }
              { ...props }
            />
          ))
        } 

        {
          !props.tasks.length && <div className="holder"> Organize your tasks and do more ! </div>
        }

      </div>
    );
}

TasksBox.propTypes = {
  tasks: PropTypes.array,
  onRemoveClick: PropTypes.func,
  onCheckboxClick: PropTypes.func,
  onColorClick: PropTypes.func
}


export default TasksBox;