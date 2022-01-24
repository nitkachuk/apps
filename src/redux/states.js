import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tip: false,
    key: 4,
    mode: 2,
    tasks: []
};

export const slises = createSlice({
  name: "tip",
  initialState,
  reducers: {
    setTip: (state, action) => {
      state.tip = action.payload;
    },

    setKey: (state, action) => {
      state.key = action.payload;
    },

    setMode: (state, action) => {
      state.mode = action.payload;
    },

    setTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const { setTip, setKey, setMode, setTasks } = slises.actions;
export const Reducer = slises.reducer;