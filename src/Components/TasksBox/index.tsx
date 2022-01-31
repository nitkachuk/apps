import React from "react";
import "./style.scss";
import Task from "../Task";
import state from "../../store/states";
import { observer } from "mobx-react";


const TasksBox: React.FC = () => {
  const { tasks, mode } = state;

  return( 
    <div className="tasks-box">

      { tasks
        .map( ( task ) => (

          (mode === 0 && task.priority === 0) 
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


export default observer( TasksBox );