import {connect} from "react-redux";

import {StateType, StoreDispatchType} from "../../redux/store";
import {followedUserAC, setUsersAC} from "../../redux/reducerUsers";
import {UsersPageClass} from "./UsersPageClass";


const mapStateToProps = (state: StateType) => {
	return {
		usersPage: state.usersPage
	}
}

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
	return {
		followedUser: (userId: number) => {
			dispatch(followedUserAC(userId));
		},
		addUsers: (users: any) => {
			dispatch(setUsersAC(users))
		}
	}
}

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageClass);


