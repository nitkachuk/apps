import { Component } from "react";
import './style.scss';


class Input extends Component   {

  constructor(props) {

    super(props);

    this.state = {

        textValue: ''

    };     

  }

  // контроллируем текстовое поле
  setValue = (e) => {
    this.setState( { textValue: e.target.value } );
  }

  // отправляем текст в родителя
  sendValue = (e) => {

    if( e ) if( e.keyCode !== 13 )   return;

    this.props.onSend( this.state.textValue );
    this.setState( { textValue: '' } );

  }

  render() {


    return( 

      <div className="input-box">
        
          <div>
            <input type="text" 
                onChange={ this.setValue } 
                value={ this.state.textValue } 
                onKeyDown={ this.sendValue }
            />
          </div>

          <div> 
            <button onClick={ () => this.sendValue( 0 ) } > Add </button>
          </div>

      </div>

    );

  }


}


export default Input;