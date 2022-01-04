import { Component } from "react";
import './style.scss';
import Caption from '../Caption/';
import Main from '../Main/';


class Wrapper extends Component   {

  constructor(props) {

    super(props);

    this.state = {

        tip: true,

        key : 4,

        modes : [ "done", "active", "all" ],
        mode : 2,   // 0 - done, 1 - active, 2 - all

        // массив заданий
        tasks : [
          
            {
              key: 0,
              text: "Task 1",
              priority: 0,
            },
            {
              key: 1,
              text: "Task 2",
              priority: 1,
            },
            {
              key: 2,
              text: "Task 3",
              priority: 2,
            },
            {
              key: 3,
              text: "Task 4",
              priority: 3,
            }
          
        ],

    };     

  }


  generateKey = () => {
    this.setState( { key: this.state.key + 1 } );
    return this.state.key;
  }


  // сортировка массива заданий по важности   (пока не работает)
  sortTasks = (  ) => {
    //this.state.tasks.sort( this.algo );
  }

      // алгоритм сортировки
      algo = ( a, b ) => {
        return b.priority - a.priority;
      }

        // очистка массива
      clearAll = () => {
        this.setState( { tasks: [] } );
      }


  // новое задание + получаем текстовое поле
  newTask = ( txt, priority = 1 ) => {

    txt = txt.trim();

    // проверка на пустое поле
    if( txt.replace(/\s/g, '') === "" )    { alert("Пустое задание"); return; }

    // проверка на одинаковые задания
    let find = 0;

    this.state.tasks
        .forEach( 
          task => { 
            if( task.text.toLowerCase() === txt.toLowerCase() )   {
                alert("Такое задание уже есть"); 
                find++;
            }
          } 
        );

    if( find )  return;
    


    txt = txt[0].toUpperCase() + txt.slice(1);

    this.setState( { 
      tasks: [ ...this.state.tasks, 
        { 
          key: this.generateKey(), 
          text: txt, 
          priority: priority 
        } 
      ] 
    } );

  }

  removeTask = ( key ) => {
    
    this.setState( {   
      tasks: this.state.tasks
        .filter( task => task.key !== key )   
    } );

  }

  // меняем режим отображения
  setMode = (  ) => {

    let mode = this.state.mode + 1;
    if( mode > 2 )  mode = 0;

    this.setState( { mode: mode } );

  }

  // фильтруем массив заданий по выбранному режиму
  tasksByMode = () => {
    if( this.state.mode === 0 ) return this.state.tasks.filter( task => task.priority === 0 );
    if( this.state.mode === 1 ) return this.state.tasks.filter( task => task.priority >= 1 );
    if( this.state.mode === 2 ) return this.state.tasks;
  }


  // меняем чекбокс (или состояние)
  toggleCheckbox = ( key ) => {

        let new_tasks = this.state.tasks.map( 

            task =>    task.key === key 

                ?   { ...task, priority: Number( !task.priority ) }
                :   task

            )

        this.setState( { tasks: new_tasks } );

  }


  // меняем цвет задания
  toggleColor = ( key, priority ) => {  

    priority++;
    if( priority > 3 )  priority = 1;

    
        let new_tasks = this.state.tasks.map( 

            task =>    task.key === key 

                ?   { ...task, priority: priority }
                :   task

            )

    this.setState( { tasks: new_tasks } );
        
    

}



  render() {

    this.sortTasks();

    return( 

      <div className="wrapper">
        
          <Caption 
            onClear = { this.clearAll } 
            onSetMode = { this.setMode }
            mode = { this.state.modes[ this.state.mode ] }
          />

          <Main 
            tasks = { this.tasksByMode( this.state.tasks ) } 
            onSend = { this.newTask } 
            onRemove = { this.removeTask } 
            onToggleCheckbox = { this.toggleCheckbox }
            onToggleColor = { this.toggleColor }
          />

          { this.state.tip
              ? <img src="/images/tip.png" 
                  className="tip" 
                  alt="Tip" 
                  onClick={ () => this.setState( { tip: false } ) } 
                />
              : ''
          }

      </div>

    );

  }


}


export default Wrapper;