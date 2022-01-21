import { useState, useEffect } from "react";
import "./style.scss";
import Caption from "../Caption/";
import Main from "../Main/";
import { capitalizeFirstLetter, tipStorage } from "../../utils/useful.js";
import { WrapperCaptionContext, WrapperMainContext } from "../../Context/";

const tipCounter = { value: 0 }
const hideCounter = 3;

export const Mode = {
  DONE: 0,
  ACTIVE: 1,
  ALL: 2
}

const Wrapper = () =>  {
  const [ tip, setTip ] = useState( tipStorage() );
  const [ key, setKey ] = useState( 4 );
  const [ mode, setMode ] = useState( Mode.ALL );
  const [ tasks, setTasks ] = useState( [] );

  useEffect( () => {
    setTasks( 
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
  }, [] );

  useEffect( () => {
    tipCounter.value = tipCounter.value + 1;
  } );

  useEffect( () => {
    if( tipCounter.value > 2 ) tipCounter.value = tipCounter.value - 1;
  }, [ tip ] );

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
    const newTasks = tasks.map( 

      task => task.key === key 

        ?   { ...task, priority: Number( !task.priority ) }
        :   task

    )

    setTasks( newTasks );
  }

  const colorHandler = ( key, priority ) => {  
    priority++;
    if( priority > 3 )  priority = 1;
    
    const newTasks = tasks.map( 
      task => task.key === key 

        ?   { ...task, priority: priority }
        :   task
    )

    setTasks( newTasks );
}

  const toggleTipHandler = (val) => {
    val 
      ? localStorage.removeItem("tip")
      : localStorage.setItem("tip", false)
    setTip( tipStorage() )
  }

  const captionFunctions = { 
    onClearClick: buttonClearAllHandler, 
    onSetModeClick: buttonSetModeHandler, 
    mode: Object.keys( Mode)[ mode ] 
  };

  const mainFunctions = { 
    tasks: tasksByMode( tasks ), 
    onSendClick: buttonNewTaskHandler, 
    onRemoveClick: buttonRemoveTaskHandler,
    onCheckboxClick: checkboxHandler,
    onColorClick: colorHandler
  };

  const tipVisibleImage = "/images/tip.png";
  const tipHiddenImage = "/images/tip_hidden.png";

  return( 
    <div className="wrapper">
        
      <WrapperCaptionContext.Provider value={ captionFunctions }>
        <Caption />
      </WrapperCaptionContext.Provider>

      <WrapperMainContext.Provider value={ mainFunctions }>
        <Main />
      </WrapperMainContext.Provider>

      { tipCounter.value < hideCounter
        ? tip 
          ? <img src={ tipVisibleImage }
              className="tip" 
              alt="Tip" 
              onClick={ () => toggleTipHandler( false ) } 
              width={600}
              height={360}
            />
          : <img src={ tipHiddenImage }
              className="tipHidden" 
              alt="TipHidden" 
              onClick={ () => toggleTipHandler( true ) } 
              width={90}
              height={130}
            />
        : null
      }

    </div>
  );
}


export default Wrapper;