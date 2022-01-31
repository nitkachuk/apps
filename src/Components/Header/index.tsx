import React from "react";
import "./style.scss";
import state from "../../store/states";
import { observer } from "mobx-react";


const Header: React.FC = () =>  {
  const { themeDark, theme } = state;
  const logoImage: string = `/images/${theme.logo[ themeDark ]}`;

  return( 
    <header>
        
      <div>
        <img src={ logoImage } alt="Logo" className="logo" width={250} height={204} />
      </div>

      <h2> Nikolai ToDo App </h2>

    </header>
  );
}


export default observer( Header );