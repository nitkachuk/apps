import { useState, useRef } from "react";
import './style.scss';


function Input(props)   {
  const input = useRef("");

  const [ textValue, setTextValue ] = useState( '' );

  const setValueHandler = () => {
    setTextValue( input.current.value );
  }

  const sendValueHandler = () => {
    props.onSendClick( input.current.value );
    setTextValue("");
  }

  const sendValueHandlerByKey = (e) => {
    e.keyCode === 13 && sendValueHandler();
  }

    return( 
      <div className="input-box">
        
        <div>
          <input 
            type="text" 
            ref={ input }
            value={ textValue }
            onKeyDown={ sendValueHandlerByKey }
            onChange={ setValueHandler }
            />
        </div>

        <div> 
          <button onClick={ sendValueHandler } > Add </button>
        </div>

      </div>
    );
}


export default Input;