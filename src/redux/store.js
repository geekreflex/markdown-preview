import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./markSlice";

export default configureStore({
  reducer: {
    mark: markReducer,
  },
  devTools: true,
});
