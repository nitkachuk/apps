import { useState, useRef, useContext } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { WrapperMainContext } from "../../Context"; 


function Input()   {
  const { onSendClick } = useContext( WrapperMainContext );
  const input = useRef("");

  const [ textValue, setTextValue ] = useState( "" );

  const setValueHandler = () => {
    setTextValue( input.current.value );
  }

  const sendValueHandler = () => {
    onSendClick( input.current.value );
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

Input.propTypes = {
  onSendClick: PropTypes.func
}


export default Input;