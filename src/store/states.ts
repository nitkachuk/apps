import { capitalizeFirstLetter, tipStorage } from "../utils/useful";
import { makeAutoObservable } from "mobx";
import { ITasks, ITheme } from "./types";


class MainFunctions {
    tip: boolean = tipStorage();
    key: number = 4;
    mode: number = 2;
    modeNames: Array<string> = [ "DONE", "ACTIVE", "ALL" ];
    tasks: Array<ITasks> = [];
    themeDark: number = 0;

    theme: ITheme = {
      logo: [ "logo.png", "logo_dark.png" ],
      button: [ "buttonLight", "buttonDark" ],
      colors: [
        [ "colorDone", "colorNormal", "colorImportnant", "colorVeryImportant" ],
        [ "colorDoneDark", "colorNormalDark", "colorImportnantDark", "colorVeryImportantDark" ]
      ],
      toggleModeButton: [
        "/images/mode_day_button.png",
        "/images/mode_night_button.png"
      ]
    }
  
    constructor() {
      makeAutoObservable( this );
    }

    setTasks = ( val: Array<ITasks> ) => {
      this.tasks = val;
    }

    toggleTheme = () => {
      this.themeDark = this.themeDark ? 0 : 1
    }

    buttonClearAllHandler = () => {
      this.tasks = [];
    }

    buttonNewTaskHandler = ( txt: string, priority: number = 1 ) => {
      txt = txt.trim();
      if( txt === "" )  { alert("Пустое задание"); return; }
  
      for( let i=0; i<this.tasks.length; i++ )   {
        if( this.tasks[i].text.toLowerCase() === txt.toLowerCase() )   {
          alert( "Такое задание уже есть" )
          return;
        }
      }
      
      txt = capitalizeFirstLetter( txt );

      this.key = this.key + 1;
      this.tasks =
          [ ...this.tasks, 
            { 
              key: this.key, 
              text: txt, 
              priority: priority 
            } 
          ] 
    }

    buttonRemoveTaskHandler = ( key: number ) => {
      this.tasks =   
        this.tasks
          .filter( task => task.key !== key )
    }

    buttonSetModeHandler = () => {
      let Mode = this.mode + 1;
      if( Mode > 2 )  Mode = 0;
  
      this.mode = Mode;
    }

    checkboxHandler = ( key: number ) => {
      const newTasks = this.tasks.map( 
  
        task => task.key === key 
  
          ?   { ...task, priority: Number( !task.priority ) }
          :   task
  
      )
  
      this.tasks = newTasks;
    }

    colorHandler = ( key: number, priority: number ) => {  
      priority++;
      if( priority > 3 )  priority = 1;
      
      const newTasks = this.tasks.map( 
        task => task.key === key 
  
          ?   { ...task, priority: priority }
          :   task
      )
  
      this.tasks = newTasks;
    }

    toggleTipHandler = (val: boolean) => {
      val 
        ? localStorage.removeItem("tip")
        : localStorage.setItem("tip", "false")
        this.tip = tipStorage()
    }
  }


  export default new MainFunctions()