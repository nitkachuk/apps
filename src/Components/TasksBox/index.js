import './style.scss';
import Task from '../Task/';


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


export default TasksBox;