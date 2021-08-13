import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editor: {
    theme: null,
    len: 0,
    cursorPos: {},
  },
  markdown: "",
  dispSet: false,
};

export const markSlice = createSlice({
  name: "mark",
  initialState,
  reducers: {
    getMarkdownFromStorage(state) {
      const markdown = localStorage.getItem("markdown")
        ? JSON.parse(localStorage.getItem("markdown"))
        : null;
      if (markdown) {
        state.markdown = markdown;
      }
    },
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
  },
  extraReducers: {
    //
  },
});

export const {
  editorCursorPos,
  editorSelLen,
  displaySettings,
  getMarkdownFromStorage,
} = markSlice.actions;
export default markSlice.reducer;
