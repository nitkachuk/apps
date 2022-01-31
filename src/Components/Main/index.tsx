import React from "react";
import "./style.scss";
import Input from "../Input";
import TasksBox from "../TasksBox";


const Main: React.FC = () => {
  return( 
    <main>
      <Input />
      <TasksBox />
    </main>
  );
}


export default Main;