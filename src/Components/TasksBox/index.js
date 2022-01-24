import { useContext } from "react";
import "./style.scss";
import Task from "../Task/";
import PropTypes from "prop-types";
import { WrapperMainContext } from "../../Context"; 


const TasksBox = () => {
  const { tasks, mode } = useContext( WrapperMainContext );

  return( 
    <div className="tasks-box">

      { tasks
        .map( ( task ) => (
          
          (mode === 0 && task.priority == 0) 
          || (mode === 1 && task.priority > 0)
          || (mode === 2 && task.priority >= 0)

            ? <Task 
                key={ task.key }
                keyValue={ task.key }
                text={ task.text }
                priority={ task.priority }
              />
            : null
        ))
      } 

      {
        !tasks.length && <div className="holder"> Organize your tasks and do more ! </div>
      }

    </div>
  );
}

TasksBox.propTypes = {
  tasks: PropTypes.array,
}


export default TasksBox;