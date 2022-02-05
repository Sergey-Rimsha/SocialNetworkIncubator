
import {StateType, StoreDispatchType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {addMessageChatAC, onChangeMessChatAC} from "../../redux/reducerDialogs";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: StoreDispatchType) => {

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


