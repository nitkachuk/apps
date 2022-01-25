import { capitalizeFirstLetter, tipStorage } from "../utils/useful.js";
import { observable, computed, makeObservable, makeAutoObservable, action } from "mobx";


class Mobx {
    tip = tipStorage();
    key = 4;
    mode = 2;
    tasks = [];
  
    constructor() {
      makeAutoObservable( this );
    }
  
    setTip = ( val ) => {
      this.tip = val;
    }
    setKey = ( val ) => {
      this.key = val;
    }
    setMode = ( val ) => {
      this.mode = val;
    }
    setTasks = ( val ) => {
      this.tasks = val;
    }

    generateKey = () => {
      this.setKey( this.key + 1 );
      return this.key;
    }

    buttonClearAllHandler = () => {
      this.setTasks( [] );
    }

    buttonNewTaskHandler = ( txt, priority = 1 ) => {
      txt = txt.trim();
      if( txt === "" )  { alert("Пустое задание"); return; }
  
      for( let i=0; i<this.tasks.length; i++ )   {
        if( this.tasks[i].text.toLowerCase() === txt.toLowerCase() )   {
          alert( "Такое задание уже есть" )
          return;
        }
      }
      
      txt = capitalizeFirstLetter( txt );
  
      this.setTasks(
          [ ...this.tasks, 
            { 
              key: this.generateKey(), 
              text: txt, 
              priority: priority 
            } 
          ] 
        );
    }

    buttonRemoveTaskHandler = ( key ) => {
      this.setTasks(   
        this.tasks
          .filter( task => task.key !== key )
      );
    }

    buttonSetModeHandler = (  ) => {
      let Mode = this.mode + 1;
      if( Mode > 2 )  Mode = 0;
  
      this.setMode( Mode );
    }

    checkboxHandler = ( key ) => {
      const newTasks = this.tasks.map( 
  
        task => task.key === key 
  
          ?   { ...task, priority: Number( !task.priority ) }
          :   task
  
      )
  
      this.setTasks( newTasks );
    }

    colorHandler = ( key, priority ) => {  
      priority++;
      if( priority > 3 )  priority = 1;
      
      const newTasks = this.tasks.map( 
        task => task.key === key 
  
          ?   { ...task, priority: priority }
          :   task
      )
  
      this.setTasks( newTasks );
    }

    toggleTipHandler = (val) => {
      val 
        ? localStorage.removeItem("tip")
        : localStorage.setItem("tip", false)
        this.setTip( tipStorage() )
    }
  }


  export default new Mobx()