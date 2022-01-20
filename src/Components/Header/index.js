import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../Context/";


function  Header()   {
  const theme = useContext( ThemeContext );
    return( 
      <header>
        
        <div>
          <img src={ `/images/${theme.logo}` } alt="Logo" className="logo" width={250} height={204} />
        </div>

        <h2> Nikolai ToDo App </h2>

      </header>
    );
}


export default Header;