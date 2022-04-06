import {connect} from "react-redux";

import {StateType, StoreDispatchType} from "../../redux/store";
import {followedUserAC, setCurrentPageAC, setIsFetchingAC, setUsersAC} from "../../redux/reducerUsers";
import {UsersPageClass} from "./UsersPageClass";


const mapStateToProps = (state: StateType) => {
	return {
		usersPage: state.usersPage,
		isFetching: state.usersPage.isFetching,
	}
}

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
	return {
		followedUser: (userId: number) => {
			dispatch(followedUserAC(userId));
		},
		addUsers: (users: any) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (currentPage: number) => {
			dispatch(setCurrentPageAC(currentPage));
		},
		setIsFetching: (isFetching: boolean) => {
			dispatch(setIsFetchingAC(isFetching))
		}
	}
}

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageClass);


