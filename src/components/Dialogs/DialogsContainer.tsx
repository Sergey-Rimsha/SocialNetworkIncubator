import {AppRootStateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {ActionDialogsType, addMessageChatAC, DialogsType, onChangeMessChatAC} from "../../redux/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";


export const DialogsContainer = () => {

	const dialogsPage = useSelector<AppRootStateType, DialogsType>((state) => state.dialogsPage)

	const dispatch = useDispatch<Dispatch<ActionDialogsType>>();

	const onChangeHandler = (text: string) => {
		dispatch(onChangeMessChatAC(text))
	}
	const sendMessage = () => {
		dispatch(addMessageChatAC())
	}

	return (
		<>
			<Dialogs
				dialogsPage={dialogsPage}
				sendMessage={sendMessage}
				onChangeHandler={onChangeHandler}/>
		</>
	)
}


