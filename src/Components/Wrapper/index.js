import { useEffect } from "react";
import "./style.scss";
import Caption from "../Caption/";
import Main from "../Main/";
import { tipStorage } from "../../utils/useful.js";
import { WrapperCaptionContext, WrapperMainContext } from "../../Context/";
import { useDispatch, useSelector } from "react-redux";
import { setTip, toggleTipHandler, setTasks, buttonClearAllHandler, 
         buttonNewTaskHandler, buttonRemoveTaskHandler, buttonSetModeHandler, 
         checkboxHandler, colorHandler } from "../../redux/states";

const tipCounter = { value: 0 }
const hideCounter = 3;
const tasksTemplate = [
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
];

export const Mode = {
  DONE: 0,
  ACTIVE: 1,
  ALL: 2
}

const Wrapper = () =>  {
  const { tip, mode, tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  dispatch( setTip( tipStorage() ) );

  useEffect( () => {
    dispatch( 
      setTasks( 
        tasksTemplate
      )
    );
  }, [] );

  useEffect( () => {
    tipCounter.value = tipCounter.value + 1;
  } );

  useEffect( () => {
    if( tipCounter.value > 2 ) tipCounter.value = tipCounter.value - 1;
  }, [ tip ] );

  const captionFunctions = { 
    onClearClick: () => dispatch( buttonClearAllHandler() ), 
    onSetModeClick: () => dispatch( buttonSetModeHandler() ), 
    mode: Object.keys( Mode )[ mode ] 
  };

  const mainFunctions = { 
    tasks: tasks,
    mode: mode,
    onSendClick: (txt) => dispatch( buttonNewTaskHandler(txt) ),
    onRemoveClick: (key) => dispatch( buttonRemoveTaskHandler(key) ),
    onCheckboxClick: (key) => dispatch( checkboxHandler(key) ),
    onColorClick: (obj) => dispatch( colorHandler(obj) )
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
              onClick={ () => dispatch( toggleTipHandler( false ) ) } 
              width={600}
              height={360}
            />
          : <img src={ tipHiddenImage }
              className="tipHidden" 
              alt="TipHidden" 
              onClick={ () => dispatch( toggleTipHandler( true ) ) } 
              width={90}
              height={130}
            />
        : null
      }

    </div>
  );
}


export default Wrapper;