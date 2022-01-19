import React from 'react'


export const themes = {
  light: {
    id: 0,
    logo: "logo.png",
    button: "buttonLight",
    colors: [ "colorDone", "colorNormal", "colorImportnant", "colorVeryImportant" ],
  },
  dark: {
    id: 1,
    logo: "logo_dark.png",
    button: "buttonDark",
    colors: [ "colorDoneDark", "colorNormalDark", "colorImportnantDark", "colorVeryImportantDark" ],
  }
}


export const ThemeContext = React.createContext( themes.light );
export const ContextChangeMode = React.createContext("");