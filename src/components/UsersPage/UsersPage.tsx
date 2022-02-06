import React from "react";
import {StateType, StoreDispatchType} from "../../redux/store";

import {followUsersAC, StateUsersType, unFollowUserAC} from "../../redux/reducerUsers";
import {connect} from "react-redux";
import {User} from "./User";

type UsersPagePropsType = {
	usersPage: StateUsersType
	followUsers: (userId: number) => void
	unFollowUser: (userId: number) => void
}


export function UsersPage (props: UsersPagePropsType) {

	const onClickHandler = (userId: number, follow: boolean) => {
		if (follow) {
			props.unFollowUser(userId)
		} else {
			props.followUsers(userId)
		}
	}

	return (
		<div>
			{
				props.usersPage.users.map((u, ) => {
					return (
						<User
							key={u.id}
							id={u.id}
							name={u.name}
							status={u.status}
							country={u.country}
							city={u.city}
							follow={u.follow}
							onClickHandler={onClickHandler}
						/>
					)
				})
			}
		</div>
	)
}


const mapStateToProps = (state: StateType) => {
	return {
		usersPage: state.usersPage
	}
}

const mapDispatchToProps = (dispatch: StoreDispatchType) => {
	return {
		followUsers: (userId: number) => {
			dispatch(followUsersAC(userId));
		},
		unFollowUser: (userId: number) => {
			dispatch(unFollowUserAC(userId))
		}
	}
}

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);


