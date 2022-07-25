import {AllChat} from "./AllChat/AllChat";
import {Dialogs} from "./Dialogs/Dialogs";

import s from './ChatPage.module.scss';

export type ChatPropsType = {
	onChangeHandler: (text: string) => void
	sendMessage: (userChat: string, text: string) => void
}

export const ChatPage = (props: ChatPropsType) => {
	return (
		<div className={s.chatPage}>
			<AllChat/>
			<Dialogs
				onChangeHandler={props.onChangeHandler}
				sendMessage={props.sendMessage}/>
		</div>
	)
}