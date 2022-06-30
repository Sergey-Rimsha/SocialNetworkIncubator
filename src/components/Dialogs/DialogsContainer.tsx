import {AppDispatch, AppRootStateType} from "../../store/store";
import {Dialogs} from "./Dialogs";
import {addMessageChatAC, DialogsType, onChangeMessChatAC} from "../../store/reducers/dialogsReducer";
import {useSelector} from "react-redux";


export const DialogsContainer = () => {

	const dialogsPage = useSelector<AppRootStateType, DialogsType>((state) => state.dialogsPage);
	const dispatch = AppDispatch();

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
