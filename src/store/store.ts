import {applyMiddleware, combineReducers, createStore, AnyAction} from "redux";
import { reducer as formReducer } from 'redux-form'
import {ActionDialogsType, dialogsReducer} from "./reducers/dialogsReducer";
import {ActionProfileType, profileReducer} from "./reducers/profileReducer";
import {ActionUsersType, usersReducer} from "./reducers/usersReducer";
import {ActionAuthType, authReducer} from "./reducers/authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionUtilsType, utilsReducer} from "./reducers/utilsReducer";
import {useDispatch} from "react-redux";


export type AppRootStateType = ReturnType<typeof rootStore>

export type StoreDispatchType = typeof store.dispatch

export type AppActionStateType = ActionProfileType
	| ActionUsersType
	| ActionDialogsType
	| ActionAuthType
	| ActionUtilsType



export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType,void,AnyAction>>();

export type AppThunkType = ThunkAction<any, AppRootStateType, unknown, AppActionStateType>

let rootStore = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	utils: utilsReducer,
})

export let store = createStore(rootStore, applyMiddleware(thunk));