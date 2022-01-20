import React from "react"


export const theme = {
  light: {
    id: 0,
    logo: "logo.png",
    button: "buttonLight",
    colors: [ "colorDone", "colorNormal", "colorImportnant", "colorVeryImportant" ],
    toggleModeButton: "/images/mode_day_button.png"
  },
  dark: {
    id: 1,
    logo: "logo_dark.png",
    button: "buttonDark",
    colors: [ "colorDoneDark", "colorNormalDark", "colorImportnantDark", "colorVeryImportantDark" ],
    toggleModeButton: "/images/mode_night_button.png"
  }
}


export const ThemeContext = React.createContext( theme.light );
export const ContextChangeMode = React.createContext("");

