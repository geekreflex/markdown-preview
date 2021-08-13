import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editor: {
    theme: null,
    length: 0,
  },
  dispSet: false,
};

export const markSlice = createSlice({
  name: "mark",
  initialState,
  reducers: {
    //
    editorCursorPos: (state, action) => {
      // console.log(action.payload.Pos);
      state.editor.cursorPos = action.payload;
    },
    editorSelLen: (state, action) => {
      state.editor.selLen = action.payload;
    },
    displaySettings: (state) => {
      state.dispSet = !state.dispSet;
    },
    charLength: (state, action) => {
      state.editor.length = action.payload;
    },
  },
  extraReducers: {
    //
  },
});

export const { editorCursorPos, editorSelLen, displaySettings, charLength } =
  markSlice.actions;
export default markSlice.reducer;
