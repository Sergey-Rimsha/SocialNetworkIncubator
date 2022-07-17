import {AllChat} from "./AllChat/AllChat";
import {Dialogs} from "./Dialogs/Dialogs";

import s from './ChatPage.module.scss'

export const ChatPage = () => {
	return (
		<div className={s.chatPage}>
			<AllChat/>
			<Dialogs/>
		</div>
	)
}