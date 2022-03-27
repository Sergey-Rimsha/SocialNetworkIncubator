import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";

import {StateType, StoreDispatchType} from "../../redux/store";
import {addUsersAC, followUsersAC, StateUsersType, unFollowUserAC} from "../../redux/reducerUsers";
import {User} from "./User";

type UsersPagePropsType = {
	usersPage: StateUsersType
	followUsers: (userId: number) => void
	unFollowUser: (userId: number) => void
	addUsers: (users: any) => void
}


export function UsersPage (props: UsersPagePropsType) {

	const onClickHandler = (userId: number, follow: boolean) => {
		if (follow) {
			props.unFollowUser(userId)
		} else {
			props.followUsers(userId)
		}
	}

	const getApiUsers = () => {
		const axios = require('axios');
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response: axios.AxiosResponse)=> {
				props.addUsers(response.data.items);
			})
	}

	return (
		<div>
			<button onClick={getApiUsers} >get users</button>

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
		},
		addUsers: (users: any) => {
			dispatch(addUsersAC(users))
		}
	}
}

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);


