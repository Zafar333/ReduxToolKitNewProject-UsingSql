import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],

  reducers: {
    addUserData(state = initialState, action) {
      state.push(...action.payload);
    },
    deleteUser(state, action) {
      state = [...action.payload];
    },
    removeUsers(state, action) {},
  },
});
export { userSlice };
export const { addUserData, deleteUser, removeUsers } = userSlice.actions;
