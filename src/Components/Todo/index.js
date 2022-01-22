import { useState } from "react";
import Header from "../Header/";
import Wrapper from "../Wrapper/";
import ThemeMode from "../ThemeMode";
import { ThemeContext, ContextChangeMode, theme } from "../../Context/";
import { Provider } from "react-redux";
import store from "../../redux/store";


const Todo = () => {
  const [ themePicked, setTheme ] = useState( theme.light );

  const toggleTheme = () => {
    const { light, dark } = theme;
    setTheme( themePicked === dark ? light : dark );
  };
      
  return( 
    <>
      <ThemeContext.Provider value={ themePicked }>
            
        <ContextChangeMode.Provider value={ toggleTheme }>
          <ThemeMode />
        </ContextChangeMode.Provider>

        <Header />

        <Provider store={store}>
          <Wrapper />
        </Provider>

      </ThemeContext.Provider>
    </>
  );
}


export default Todo;
