import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import {ActionDialogsType, dialogsReducer} from "./dialogsReducer";
import {ActionProfileType, profileReducer} from "./profileReducer";
import {ActionUsersType, usersReducer} from "./usersReducer";
import {ActionAuthType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {ActionUtilsType, utilsReducer} from "./utilsReducer";


export type AppRootStateType = ReturnType<typeof rootStore>

export type StoreDispatchType = typeof store.dispatch

export type AppActionStateType = ActionProfileType
	| ActionUsersType
	| ActionDialogsType
	| ActionAuthType
	| ActionUtilsType

export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionStateType>



let rootStore = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	utils: utilsReducer,
})

export let store = createStore(rootStore, applyMiddleware(thunk));