import React from "react";
import UserImg from "../../../img/ava_default.jpg";
import {AddMessageChatType, OnChangeMessChatType} from "../../../App";

type NewMessagesPropsType = {
	changeMessChat: string
	onChangeMessChat: OnChangeMessChatType
	addMessageChat: AddMessageChatType
}


export function NewMessages(props: NewMessagesPropsType) {

	const addNewMessage = (): void => {
		props.addMessageChat();
	}

	const onChangeMess = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		let text: string = event.target.value;
		props.onChangeMessChat(text)
	}

	return (
		<div className="new-messages">
			<img src={UserImg} alt="user_img"/>
			<div className="dialogs__box">
				<div className="dialogs__user-name">
					Sergey Rimsha
				</div>
				<textarea value={props.changeMessChat} onChange={onChangeMess} name="dialogs-message" placeholder="your message..." />
				<div className="dialogs__btn">
					<button onClick={addNewMessage} >Send</button>
				</div>
			</div>
		</div>
	)
}