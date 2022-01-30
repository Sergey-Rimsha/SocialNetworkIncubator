import React from "react";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {addMessageChatAC, onChangeMessChatAC} from "../../redux/reducerDialogs";

type PropsType = {
	store: StoreType
}


export function DialogsContainer (props: PropsType) {

	const sendMessage = () => {
		props.store.dispatch(addMessageChatAC())
	}

	const onChangeHandler = (text: string) => {
		props.store.dispatch(onChangeMessChatAC(text))
	}


	return (
		<Dialogs
			sendMessage={sendMessage}
			onChangeHandler={onChangeHandler}
			dialogsPage={props.store.getState().dialogsPage}
		/>
	)
}


