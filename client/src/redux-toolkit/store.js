import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSliceReducer";
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
