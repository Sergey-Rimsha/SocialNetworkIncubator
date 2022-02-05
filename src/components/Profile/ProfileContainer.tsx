import {Profile} from "./Profile";
import {addPostAC, onChangeMessPostAC} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import {StateType, StoreDispatchType} from "../../redux/store";


const mapStateToProps = (state: StateType) => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
	return {
		addNewPost: () => {
			dispatch(addPostAC());
		},
		onChangeHandlerPostText: (text:string) => {
			let action = onChangeMessPostAC(text)
			dispatch(action)
		}
	}
}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

