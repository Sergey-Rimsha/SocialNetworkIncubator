import {ChatPage} from "./ChatPage";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {addMessageChatAC, onChangeMessChatAC} from "../../store/reducers/dialogsReducer";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ChatStateType} from "../../store/reducers/chatReducer";

export const ChatContainer = () => {

	const changeMessage = useSelector<AppRootStateType, string>(state => state.dialogsPage.changeMessChat);

	const chat = useSelector<AppRootStateType, ChatStateType>(state => state.chat);
	const chatUsers = Object.keys(chat);

	const navigate = useNavigate()

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

	useEffect(() => {
		if (chatUsers[0]) {
			navigate(`/chat/${chatUsers[0]}`)
		}
	},[])

	return (
		<>
			<ChatPage
				onChangeHandler={onChangeHandler}
				sendMessage={sendMessage}/>
		</>
	)
};