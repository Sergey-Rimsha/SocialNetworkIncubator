import {ChatPage} from "./ChatPage";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {addMessageChatAC, onChangeMessChatAC} from "../../store/reducers/dialogsReducer";
import {useSelector} from "react-redux";

export const ChatContainer = () => {

	const changeMessage = useSelector<AppRootStateType, string>(state => state.dialogsPage.changeMessChat)

	const dispatch = AppDispatch();

	const onChangeHandler = (text: string) => {
		dispatch(onChangeMessChatAC(text))
	}

	const sendMessage = () => {
		if (changeMessage) {
			dispatch(addMessageChatAC())
		}
		dispatch(onChangeMessChatAC(''))
	}

	return (
		<>
			<ChatPage
				onChangeHandler={onChangeHandler}
				sendMessage={sendMessage}/>
		</>
	)
};