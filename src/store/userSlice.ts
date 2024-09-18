import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../types/user.interface";

const initialState: IUserState = {
  name: "",
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserState>) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
