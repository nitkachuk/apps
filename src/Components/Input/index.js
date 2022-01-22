import { useState, useRef, useContext } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { WrapperMainContext } from "../../Context"; 


const Input = () =>  {
  const { onSendClick } = useContext( WrapperMainContext );
  const inputRef = useRef("");

  const [ textValue, setTextValue ] = useState( "" );

  const setValueHandler = () => {
    setTextValue( inputRef.current.value );
  }

  const sendValueHandler = () => {
    onSendClick( inputRef.current.value );
    setTextValue("");
  }

  const sendValueHandlerByKey = (e) => {
    e.keyCode === "Enter" && sendValueHandler();
  }

  return( 
    <div className="input-box">
        
      <div>
        <input 
          type="text" 
          ref={ inputRef }
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