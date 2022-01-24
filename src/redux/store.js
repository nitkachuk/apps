import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./states";

export default configureStore({
  reducer: {
    tip: Reducer,
    key: Reducer,
    mode: Reducer,
    tasks: Reducer
  }
});
