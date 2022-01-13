import React from "react";
import Header from '../Header/';
import Wrapper from '../Wrapper/';
import ModeSwitch from '../ModeSwitch';
import { ThemeContext, ContextChangeMode, themes } from '../../Context/';


class Todo extends React.Component   {
  constructor(props) {
    super(props);

    this.state = {
        theme: themes.light,
    };

    this.toggleTheme = () => {
      const { light, dark } = themes
      this.setState(state => ({
        theme: state.theme === dark ? light : dark
      }));
    };
  }

  render() {

    const themeMode = this.state.theme;

      return( 
        <>
          <ThemeContext.Provider value={ themeMode }>
            
            <ContextChangeMode.Provider value={ this.toggleTheme }>
              <ModeSwitch />
            </ContextChangeMode.Provider>

            <Header />
            <Wrapper />

          </ThemeContext.Provider>
        </>
      );

  }
}


export default Todo;
