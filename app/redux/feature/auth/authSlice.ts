// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';
// import { AppMode } from '../../../constants';

// export interface authState {
//     user: null | any;
//     accessToken: string | null;
//     mode: any,
// }

// const initialState: authState = {
//     user: null,
//     accessToken: null,
//     mode: null,
// }

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAuth: (state, action: PayloadAction<any>) => {
//         const user = action.payload;
//         const accessToken = user.token;
//         state.user = user;
//         state.accessToken = accessToken;
//         setLocalUser(user)
//       },
//       updateUser: (state, action: PayloadAction<any>) => {
//         const user = action.payload;
//         const newUser = {...state.user ,...user};
//         state.user = newUser;
//         setLocalUser(newUser);
//       },
//       logOut: (state, action: PayloadAction<any>) => {
//         state.user = null;
//         state.accessToken = null;
//         destroyLocalStorage();
//       },
//       changeAppMode: (state, action) => {
//         console.log('changeAppMode reducer called with payload:', action.payload);
//         state.mode = action.payload;
//         console.log('Mode updated in state:', state.mode);
//       },
//   },
// })


// // Action creators are generated for each case reducer function
// export const {setAuth, updateUser, logOut,changeAppMode } = authSlice.actions
// export const tokenSelector = (s: any) => s.auth.accessToken;
// export const authSelector = (s: any) => s.auth.user;
// export const modeSelector = (s: any) => s.auth.mode;


// export default authSlice.reducer


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';

export interface authState {
    user: null | any;
    accessToken: string | null;
    mode: any;
}

const initialState: authState = {
    user: null,
    accessToken: null,
    mode: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ✅ Set full user + token
    setAuth: (state, action: PayloadAction<any>) => {
        const user = action.payload;
        state.user = user;
<<<<<<< Updated upstream
        state.accessToken = accessToken;
        setLocalUser(user)
      },
      updateUser: (state, action: PayloadAction<any>) => {
        const user = action.payload;
        const newUser = {...state.user ,...user};
        state.user = newUser;   
=======
        state.accessToken = user.token;
        setLocalUser(user);
    },

    // ✅ Update user fields dynamically
    updateUser: (state, action: PayloadAction<any>) => {
        const newUser = { ...state.user, ...action.payload };
        state.user = newUser;
>>>>>>> Stashed changes
        setLocalUser(newUser);
    },

    // ✅ Logout
    logOut: (state) => {
        state.user = null;
        state.accessToken = null;
        destroyLocalStorage();
    },

    // ✅ Change app mode
    changeAppMode: (state, action) => {
        state.mode = action.payload;
    },
  },
});

<<<<<<< Updated upstream

// Action creators are generated for each case reducer function
export const {setAuth, updateUser, logOut,changeAppMode } = authSlice.actions
export const tokenSelector = (s: any) => s.auth.accessToken;  
=======
// ✅ Selectors
export const tokenSelector = (s: any) => s.auth.accessToken;
>>>>>>> Stashed changes
export const authSelector = (s: any) => s.auth.user;
export const modeSelector = (s: any) => s.auth.mode;

// ⚡️ Interest selector
export const interestSelector = (s: any) => s.auth.user?.interest ?? [];

<<<<<<< Updated upstream
export default authSlice.reducer


 
=======
export const { setAuth, updateUser, logOut, changeAppMode } = authSlice.actions;

export default authSlice.reducer;
>>>>>>> Stashed changes
