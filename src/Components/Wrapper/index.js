import React, { useState } from "react";
import './style.scss';
import Caption from '../Caption/';
import Main from '../Main/';
import { capitalizeFirstLetter, tipStorage } from '../../utils/useful.js';


const Mode = {
  DONE: 0,
  ACTIVE: 1,
  ALL: 2
}

function Wrapper(props)   {
  const [ tip, setTip ] = useState( tipStorage() );
  const [ key, setKey ] = useState( 4 );
  const [ mode, setMode ] = useState( Mode.ALL );
  const [ tasks, setTasks ] = useState( 
    [
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
    ]
  );

  const generateKey = () => {
    setKey( key + 1 );
    return key;
  }

  const buttonClearAllHandler = () => {
    setTasks( [] );
  }

  const buttonNewTaskHandler = ( txt, priority = 1 ) => {
    txt = txt.trim();
    if( txt === "" )  { alert("Пустое задание"); return; }

    for( let i=0; i<tasks.length; i++ )   {
      if( tasks[i].text.toLowerCase() === txt.toLowerCase() )   {
        alert( "Такое задание уже есть" )
        return;
      }
    }
    
  txt = capitalizeFirstLetter( txt );

    setTasks(
      [ ...tasks, 
        { 
          key: generateKey(), 
          text: txt, 
          priority: priority 
        } 
      ] 
    );
  }

  const buttonRemoveTaskHandler = ( key ) => {
    setTasks(   
      tasks
        .filter( task => task.key !== key )
    );
  }

  const buttonSetModeHandler = (  ) => {
    let Mode = mode + 1;
    if( Mode > 2 )  Mode = 0;

    setMode( Mode );
  }

  const tasksByMode = () => {
    if( mode === 0 ) return tasks.filter( task => task.priority === 0 );
    if( mode === 1 ) return tasks.filter( task => task.priority >= 1 );
    if( mode === 2 ) return tasks;
  }

  const checkboxHandler = ( key ) => {
    const new_tasks = tasks.map( 

      task =>    task.key === key 

        ?   { ...task, priority: Number( !task.priority ) }
        :   task

    )

    setTasks( new_tasks );
  }

  const colorHandler = ( key, priority ) => {  
    priority++;
    if( priority > 3 )  priority = 1;
    
    const new_tasks = tasks.map( 
      task =>    task.key === key 

        ?   { ...task, priority: priority }
        :   task
    )

    setTasks( new_tasks );
}

  const toggleTipHandler = (val) => {
    val 
      ? localStorage.removeItem('tip')
      : localStorage.setItem('tip', false)
    setTip( tipStorage() )
  }

    return( 
      <div className="wrapper">
        
        <Caption 
          onClearClick={ buttonClearAllHandler } 
          onSetModeClick={ buttonSetModeHandler }
          mode={ Object.keys( Mode )[ mode ] }
        />

        <Main 
          tasks={ tasksByMode( tasks ) } 
          onSendClick={ buttonNewTaskHandler } 
          onRemoveClick={ buttonRemoveTaskHandler } 
          onCheckboxClick={ checkboxHandler }
          onColorClick={ colorHandler }
        />

        { tip 
          ? <img src="/images/tip.png" 
              className="tip" 
              alt="Tip" 
              onClick={ () => toggleTipHandler(0) } 
              width={600}
              height={360}
             />
          : <img src="/images/tip_hidden.png" 
              className="tipHidden" 
              alt="TipHidden" 
              onClick={ () => toggleTipHandler(1) } 
              width={90}
              height={130}
            />
        }

      </div>
    );
}


export default Wrapper;