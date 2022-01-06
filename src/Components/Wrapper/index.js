import { Component } from "react";
import './style.scss';
import Caption from '../Caption/';
import Main from '../Main/';
import { capitalizeFirstLetter } from '../../utils/useful.js';

const Mode = {
  DONE: 0,
  ACTIVE: 1,
  ALL: 2
}


class Wrapper extends Component   {
  constructor(props) {
    super(props);

    this.state = {

        key : 4,
        mode : Mode.ALL,

        // массив заданий
        tasks : [
          
            {
              key: 0,
              text: "Task 1",
              priority: 0,
            },
            {
              key: 1,
              text: "Task 2",
              priority: 1,
            },
            {
              key: 2,
              text: "Task 3",
              priority: 2,
            },
            {
              key: 3,
              text: "Task 4",
              priority: 3,
            }
          
        ],
    };     
  }

  generateKey = () => {
    this.setState( { key: this.state.key + 1 } );
    return this.state.key;
  }

   buttonClearAllHandler = () => {
    this.setState( { tasks: [] } );
  }

  buttonNewTaskHandler = ( txt, priority = 1 ) => {
    txt = txt.trim();

    if( txt === "" )  { alert("Пустое задание"); return; }

    let find = 0;

    this.state.tasks
        .forEach( 
          task => { 
            if( task.text.toLowerCase() === txt.toLowerCase() )   {
                alert("Такое задание уже есть"); 
                find++;
                return;
            }
          } 
        );

    if( find )  return;
    
    txt = capitalizeFirstLetter( txt );

    this.setState( { 
      tasks: [ ...this.state.tasks, 
        { 
          key: this.generateKey(), 
          text: txt, 
          priority: priority 
        } 
      ] 
    } );
  }

  buttonRemoveTaskHandler = ( key ) => {
    this.setState( {   
      tasks: this.state.tasks
        .filter( task => task.key !== key )   
    } );
  }

  buttonSetModeHandler = (  ) => {
    let mode = this.state.mode + 1;
    if( mode > 2 )  mode = 0;

    this.setState( { mode: mode } );
  }

  tasksByMode = () => {
    if( this.state.mode === 0 ) return this.state.tasks.filter( task => task.priority === 0 );
    if( this.state.mode === 1 ) return this.state.tasks.filter( task => task.priority >= 1 );
    if( this.state.mode === 2 ) return this.state.tasks;
  }

  checkboxHandler = ( key ) => {
    const new_tasks = this.state.tasks.map( 

      task =>    task.key === key 

        ?   { ...task, priority: Number( !task.priority ) }
        :   task

    )

    this.setState( { tasks: new_tasks } );
  }

  colorHandler = ( key, priority ) => {  
    priority++;
    if( priority > 3 )  priority = 1;
    
    const new_tasks = this.state.tasks.map( 
      task =>    task.key === key 

        ?   { ...task, priority: priority }
        :   task
    )

    this.setState( { tasks: new_tasks } );
}

  toggleTipHandler = (val) => {
    val 
      ? localStorage.removeItem('tip')
      : localStorage.setItem('tip', false)
    this.forceUpdate();
  }

  render() {
    return( 
      <div className="wrapper">
        
        <Caption 
          onClearClick={ this.buttonClearAllHandler } 
          onSetModeClick={ this.buttonSetModeHandler }
          mode={ Object.keys( Mode )[ this.state.mode ] }
        />

        <Main 
          tasks={ this.tasksByMode( this.state.tasks ) } 
          onSendClick={ this.buttonNewTaskHandler } 
          onRemoveClick={ this.buttonRemoveTaskHandler } 
          onCheckboxClick={ this.checkboxHandler }
          onColorClick={ this.colorHandler }
        />

        { !localStorage.getItem('tip') 
          ? <img src="/images/tip.png" 
              className="tip" 
              alt="Tip" 
              onClick={ () => this.toggleTipHandler(0) } 
              width={600}
              height={360}
             />
          : <img src="/images/tip_hidden.png" 
              className="tipHidden" 
              alt="TipHidden" 
              onClick={ () => this.toggleTipHandler(1) } 
              width={90}
              height={130}
            />
        }

      </div>
    );
  }
}


export default Wrapper;