import  React from "react";
import "./style.scss";
import { useEffect } from "react";
import state from "../../store/states";
import { observer } from "mobx-react";


const Tip: React.FC = () =>  {
  const { tip, toggleTipHandler } = state;

  const tipCounter = { value: 0 };
  const hideCounter: number = 3;

  const tipVisibleImage: string = "/images/tip.png";
  const tipHiddenImage: string = "/images/tip_hidden.png";

  useEffect( () => {
    tipCounter.value = tipCounter.value + 1;
  } );

  useEffect( () => {
    if( tipCounter.value > 2 ) tipCounter.value = tipCounter.value - 1;
  }, [ tip ] );

  return( 
    <>
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
    </>
  );
}


export default observer( Tip );