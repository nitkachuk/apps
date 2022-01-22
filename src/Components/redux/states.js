import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tip: false,
    key: 4,
    mode: 2,
    tasks: []
};

export const tipSlice = createSlice({
  name: "tip",
  initialState,
  reducers: {
    setTip: (state, action) => {
      state.tip = action.payload;
    }
  }
});

export const keySlice = createSlice({
    name: "key",
    initialState,
    reducers: {
      setKey: (state, action) => {
        state.key = action.payload;
      }
    }
  });

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
      setMode: (state, action) => {
        state.mode = action.payload;
      }
    }
});

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      setTasks: (state, action) => {
        state.tasks = action.payload;
      }
    }
});

export const { setTip } = tipSlice.actions;
export const { setKey } = keySlice.actions;
export const { setMode } = modeSlice.actions;
export const { setTasks } = tasksSlice.actions;

export const tipReducer = tipSlice.reducer;
export const keyReducer = keySlice.reducer;
export const modeReducer = modeSlice.reducer;
export const tasksReducer = tasksSlice.reducer;