import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editor: {
    theme: null,
  },
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
  },
  extraReducers: {
    //
  },
});

export const { editorCursorPos, editorSelLen } = markSlice.actions;
export default markSlice.reducer;
