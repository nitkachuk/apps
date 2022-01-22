import { configureStore } from "@reduxjs/toolkit";
import { tipReducer, keyReducer, modeReducer, tasksReducer } from "./states";

export default configureStore({
  reducer: {
    tip: tipReducer,
    key: keyReducer,
    mode: modeReducer,
    tasks: tasksReducer
  }
});
