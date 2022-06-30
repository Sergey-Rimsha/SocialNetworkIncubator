import {AppDispatch, AppRootStateType} from "../../store/store";
import {Dialogs} from "./Dialogs";
import {ActionDialogsType, addMessageChatAC, DialogsType, onChangeMessChatAC} from "../../store/reducers/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export const DialogsContainer = () => {

	const navigate = useNavigate();

	const dialogsPage = useSelector<AppRootStateType, DialogsType>((state) => state.dialogsPage);
	const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

	const dispatch = AppDispatch();


	const onChangeHandler = (text: string) => {
		dispatch(onChangeMessChatAC(text))
	}

	const sendMessage = () => {
		dispatch(addMessageChatAC())
	}

	useEffect(() => {
		if (!isAuth) {
			navigate('/');
		}
	}, [])


	return (
		<>
			<Dialogs
				dialogsPage={dialogsPage}
				sendMessage={sendMessage}
				onChangeHandler={onChangeHandler}/>
		</>
	)
}
