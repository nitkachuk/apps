import { Component } from "react";
import './style.scss';


class Input extends Component   {
  constructor(props) {
    super(props);

    this.state = {
        textValue: ''
    };

  }

  setValueHandler = (e) => {
    this.setState( { textValue: e.target.value } );
  }

  sendValueHandler = (e) => {
    // это не ошибка :)  if( e ) - это дополнительная проверка
    if( e ) if( e.keyCode !== 13 )   return;

    this.props.onSendClick( this.state.textValue );
    this.setState( { textValue: '' } );
}

  render() {
    return( 
      <div className="input-box">
        
        <div>
          <input type="text" 
            onChange={ this.setValueHandler } 
            value={ this.state.textValue } 
            onKeyDown={ this.sendValueHandler }
            />
        </div>

        <div> 
          <button onClick={ () => this.sendValueHandler( 0 ) } > Add </button>
        </div>

      </div>
    );
  }
}


export default Input;