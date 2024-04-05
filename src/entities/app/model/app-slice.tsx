import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
export type Error = string | null;
export type IsAuth = boolean;

const initialState = {
  isAuth: false as IsAuth,
  error: null as Error,
  status: 'idle' as Status,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppIsAuth(state, action: PayloadAction<{ isAuth: IsAuth }>) {
      state.isAuth = action.payload.isAuth;
    },
    setAppError(state, action: PayloadAction<{ error: Error }>) {
      state.error = action.payload.error;
    },
    setAppStatus(state, action: PayloadAction<{ status: Status }>) {
      state.status = action.payload.status;
    },
  },
});
