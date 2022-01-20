import "./style.scss";
import Input from "../Input/";
import TasksBox from "../TasksBox/";
import PropTypes from "prop-types";

function Main(props)   {
    return( 
      <main>
        
        <Input { ...props } />
        <TasksBox { ...props } />

      </main>
    );
}

Main.propTypes = {
  tasks: PropTypes.array,
  onSendClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onCheckboxClick: PropTypes.func,
  onColorClick: PropTypes.func
}


export default Main;