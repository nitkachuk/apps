import { useState } from "react";
import Header from "../Header/";
import Wrapper from "../Wrapper/";
import ModeDark from "../ModeDark";
import { ThemeContext, ContextChangeMode, theme } from "../../Context/";


function Todo()   {
  const [ themePicked, setTheme ] = useState( theme.light );

  const toggleTheme = () => {
    const { light, dark } = theme;
    setTheme( themePicked === dark ? light : dark );
  };
      return( 
        <>
          <ThemeContext.Provider value={ themePicked }>
            
            <ContextChangeMode.Provider value={ toggleTheme }>
              <ModeDark />
            </ContextChangeMode.Provider>

            <Header />
            <Wrapper />

          </ThemeContext.Provider>
        </>
      );
}


export default Todo;
