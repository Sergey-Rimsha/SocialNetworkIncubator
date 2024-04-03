import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Action, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line import/no-cycle
import { ActionAuthType, authReducer } from './reducers/authReducer';
import { chatReducer } from './reducers/chatReducer';
import { ActionDialogsType, dialogsReducer } from './reducers/dialogsReducer';
// eslint-disable-next-line import/no-cycle
import { ActionProfileType, profileReducer } from './reducers/profileReducer';
// eslint-disable-next-line import/no-cycle
import { ActionUsersType, usersReducer } from './reducers/usersReducer';
// eslint-disable-next-line import/no-cycle
import { ActionUtilsType, utilsReducer } from './reducers/utilsReducer';

export type AppRootStateType = ReturnType<typeof rootReducers>;

export type AppStateType = typeof store;

export type AppActionStateType =
  | ActionProfileType
  | ActionUsersType
  | ActionDialogsType
  | ActionAuthType
  | ActionUtilsType;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AppDispatch = () => useDispatch<ThunkDispatch<AppStateType, void, Action>>();

export type AppThunkType = ThunkAction<any, AppRootStateType, unknown, AppActionStateType>;

const rootReducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  utils: utilsReducer,
  chat: chatReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
