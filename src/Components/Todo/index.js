import React, { useState } from "react";
import Header from '../Header/';
import Wrapper from '../Wrapper/';
import ModeSwitch from '../ModeSwitch';
import { ThemeContext, ContextChangeMode, themes } from '../../Context/';


function Todo()   {
  const [ theme, setTheme ] = useState( themes.light );

  const toggleTheme = () => {
    const { light, dark } = themes;
    setTheme( theme === dark ? light : dark );
  };
      return( 
        <>
          <ThemeContext.Provider value={ theme }>
            
            <ContextChangeMode.Provider value={ toggleTheme }>
              <ModeSwitch />
            </ContextChangeMode.Provider>

            <Header />
            <Wrapper />

          </ThemeContext.Provider>
        </>
      );
}


export default Todo;
