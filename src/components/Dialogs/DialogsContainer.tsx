
import {StateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {addMessageChatAC, onChangeMessChatAC} from "../../redux/reducerDialogs";
import {connect} from "react-redux";

// type PropsType = {
// 	store: StoreType
// }

//
// function DialogsContainerS () {
//
// 	const sendMessage = () => {
// 		props.store.dispatch(addMessageChatAC())
// 	}
//
// 	const onChangeHandler = (text: string) => {
// 		props.store.dispatch(onChangeMessChatAC(text))
// 	}
//
//
// 	return (
// 		<Dialogs
// 			sendMessage={sendMessage}
// 			onChangeHandler={onChangeHandler}
// 			dialogsPage={props.store.getState().dialogsPage}
// 		/>
// 	)
// }



const mapStateToProps = (state: StateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: any) => {

	return {
		sendMessage: () => {
			dispatch(addMessageChatAC())
		},
		onChangeHandler: (text: string) => {
			dispatch(onChangeMessChatAC(text))
		}
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


