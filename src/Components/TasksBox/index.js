import { useContext } from "react";
import "./style.scss";
import Task from "../Task/";
import PropTypes from "prop-types";
import { WrapperMainContext } from "../../Context"; 


const TasksBox = () => {
  const { tasks } = useContext( WrapperMainContext );

  return( 
    <div className="tasks-box">

      { tasks
        .map( ( task ) => (

          <Task 
            key={ task.key }
            keyValue={ task.key }
            text={ task.text }
            priority={ task.priority }
          />
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