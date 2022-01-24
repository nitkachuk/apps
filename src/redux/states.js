import { createSlice } from "@reduxjs/toolkit";
import { capitalizeFirstLetter, tipStorage } from "../utils/useful.js";


const initialState = {
    tip: false,
    key: 4,
    mode: 2,
    tasks: []
};

const slises = createSlice({
    name: "slises",
    initialState,
    reducers: {
      setTip: (state, action) => {
        state.tip = action.payload;
      },

      toggleTipHandler: (state, action) => {
        action.payload 
          ? localStorage.removeItem("tip")
          : localStorage.setItem("tip", false)
        state.tip =  tipStorage();
      },

      buttonSetModeHandler: (state) => {
        let Mode = state.mode + 1;
        if( Mode > 2 )  Mode = 0;
    
        state.mode = Mode;
      },

      setTasks: (state, action) => {
        state.tasks = action.payload;
      },
      
      buttonClearAllHandler: (state) => {
        state.tasks = [];
      },

      buttonNewTaskHandler: ( state, action ) => {
        let txt = action.payload.trim();
        const priority = 1;
          if( txt === "" )  { alert("Пустое задание"); return; }

          for( let i=0; i<state.tasks.length; i++ )   {
            if( state.tasks[i].text.toLowerCase() === txt.toLowerCase() )   {
              alert( "Такое задание уже есть" )
              return;
            }
          }
          
        txt = capitalizeFirstLetter( txt );

        state.key = state.key + 1;

        state.tasks = 
          [ ...state.tasks, 
            { 
              key: state.key, 
              text: txt, 
              priority: priority 
            } 
          ];
      },

      buttonRemoveTaskHandler: ( state, action ) => {
        state.tasks =    
          state.tasks
            .filter( task => task.key !== action.payload );
      },

      checkboxHandler: ( state, action ) => {
        const newTasks = state.tasks.map( 
    
          task => task.key === action.payload 
    
            ?   { ...task, priority: Number( !task.priority ) }
            :   task
    
        )
    
        state.tasks = newTasks;
      },

      colorHandler: ( state, action ) => {  
        let priority = action.payload.priority + 1;
        if( priority > 3 )  priority = 1;
        
        const newTasks = state.tasks.map( 
          task => task.key === action.payload.keyValue 
    
            ? { ...task, priority: priority }
            : task
        )
    
        state.tasks = newTasks;
      }

    }
});

export const { setTip, toggleTipHandler, setTasks, buttonClearAllHandler, 
               buttonNewTaskHandler, buttonRemoveTaskHandler, buttonSetModeHandler, 
               checkboxHandler, colorHandler } = slises.actions;

export default slises.reducer;