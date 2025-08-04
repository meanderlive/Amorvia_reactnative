import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';
import { AppMode } from '../../../constants';

export interface authState {
    user: null | any;
    accessToken: string | null;
    mode: any,
}

const initialState: authState = {
    user: null,
    accessToken: null,
    mode: AppMode.Dating,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
        const user = action.payload;
        const accessToken = user.token;
        state.user = user;
        state.accessToken = accessToken;
        setLocalUser(user)
      },
      updateUser: (state, action: PayloadAction<any>) => {
        const user = action.payload;
        const newUser = {...state.user ,...user};
        state.user = newUser;
        setLocalUser(newUser);
      },
      logOut: (state, action: PayloadAction<any>) => {
        state.user = null;
        state.accessToken = null;
        destroyLocalStorage();
      },
      changeAppMode: (state, action) => {
        state.mode = action.payload;
      },
  },
})


// Action creators are generated for each case reducer function
export const {setAuth, updateUser, logOut,changeAppMode } = authSlice.actions
export const tokenSelector = (s: any) => s.auth.accessToken;
export const authSelector = (s: any) => s.auth.user;


export default authSlice.reducer