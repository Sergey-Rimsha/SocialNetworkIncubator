import {Profile} from "./Profile";
import {addPostAC, onChangeMessPostAC} from "../../redux/reducerProfile";
import {connect} from "react-redux";
import {DialogsType, StateType} from "../../redux/store";


// type DispatchType = {
// 	dispatch: (action: ActionType) => void
// }

// export function ProfileContainer(props: StateType) {
//
// 	const addNewPost = () => {
// 		props.store.dispatch(addPostAC());
// 	}
//
// 	const onChangeHandlerPostText = (text:string) => {
// 		props.store.dispatch(onChangeMessPostAC(text))
// 	}
//
// 	return (
// 		<Profile
// 			addNewPost={addNewPost}
// 			onChangeHandlerPostText={onChangeHandlerPostText}
// 			profilePage={props.store.getState().profilePage}
// 		/>
// 	)
// }



const mapStateToProps = (state: StateType) => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch: any) => {
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

