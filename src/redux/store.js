import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./states";

export default configureStore({
  reducer: { 
    todo:  Reducer 
  }
})