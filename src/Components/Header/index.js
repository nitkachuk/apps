import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../Context/";


const Header = () =>  {
  const theme = useContext( ThemeContext );
  const logoImage = `/images/${theme.logo}`;

  return( 
    <header>
        
      <div>
        <img src={ logoImage } alt="Logo" className="logo" width={250} height={204} />
      </div>

      <h2> Nikolai ToDo App </h2>

    </header>
  );
}


export default Header;