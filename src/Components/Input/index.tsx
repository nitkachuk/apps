import React, { useState } from "react";
import "./style.scss";
import state from "../../store/states";
import { observer } from "mobx-react";


const Input: React.FC = () =>  {
  const { buttonNewTaskHandler } = state;
  const buttonEnter: number = 13;

  const [ textValue, setTextValue ] = useState<string>( "" );

  const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue( e.target.value )
  }

  const sendValueHandler = () => {
    buttonNewTaskHandler( textValue );
    setTextValue("");
  }

  const sendValueHandlerByKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.keyCode === buttonEnter && sendValueHandler();
  }

  return( 
    <div className="input-box">
        
      <div>
        <input 
          type="text" 
          value={ textValue }
          onKeyDown={ sendValueHandlerByKey }
          onChange={ (e) => setValueHandler(e) }
          />
      </div>

      <div> 
        <button onClick={ sendValueHandler } > Add </button>
      </div>

    </div>
  );
}


export default observer( Input );