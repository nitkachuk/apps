import './style.scss';
import Input from '../Input/';
import TasksBox from '../TasksBox/';


function Main(props)   {
    return( 
      <main>
        
        <Input { ...props } />
        <TasksBox { ...props } />

      </main>
    );
}


export default Main;