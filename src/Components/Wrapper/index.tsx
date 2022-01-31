import React, { useEffect } from "react";
import "./style.scss";
import Caption from "../Caption";
import Main from "../Main";
import state from "../../store/states";
import { observer } from "mobx-react";
import { ITasks } from "../../store/types";
import Tip from "../Tip";

const tasksTemplate: Array<ITasks> = [
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
];

const Wrapper: React.FC = () =>  {
  const { setTasks } = state;
  
  useEffect( () => {
    setTasks( 
      tasksTemplate
     );
  }, [] );

  return( 
    <div className="wrapper">
      <Caption />
      <Main />

      <Tip />
    </div>
  );
}


export default observer( Wrapper );