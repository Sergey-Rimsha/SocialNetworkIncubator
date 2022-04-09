import {connect} from "react-redux";

import {StateType} from "../../redux/store";
import {addUsers, followedUser, setCurrentPage, setIsFetching, setTotalCount, UserType} from "../../redux/reducerUsers";
import React from "react";
import * as axios from "axios";
import {UsersPage} from "./UsersPage";
import {Preloader} from "../Preloader/Preloader";

type UsersPagePropsType = {
	users: Array<UserType>,
	totalCount: number
	userPageSize: number
	currentPage: number
	isFetching: boolean
	followedUser: (userId: number) => void
	addUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setIsFetching: (isFetching: boolean) => void
	setTotalCount: (totalCount: number) => void
}

export class UsersPageClass extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		this.props.setIsFetching(true);
		let currentPage = this.props.currentPage;
		let userPageSize = this.props.userPageSize;
		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${userPageSize}`)
		.then((response: axios.AxiosResponse) => {
			this.props.addUsers(response.data.items);
			this.props.setTotalCount(response.data.totalCount);
			this.props.setIsFetching(false);
		});
	}

	onPageChanged = (pageNumber:number, countUsers = 10) => {
		this.props.setIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${countUsers}`)
		.then((response: axios.AxiosResponse) => {
			this.props.addUsers(response.data.items);
			this.props.setTotalCount(response.data.totalCount);
			this.props.setIsFetching(false);
		})
	}

	onClickHandler = (userId: number) => {
		this.props.followedUser(userId);
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<UsersPage
					users={this.props.users}
					totalCount={this.props.totalCount}
					userPageSize={this.props.userPageSize}
					currentPage={this.props.currentPage}
					onClickHandler={this.onClickHandler}
					onPageChanged={this.onPageChanged}
				/>
			</>
		)
	}
}


const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		totalCount: state.usersPage.totalCount,
		userPageSize: state.usersPage.userPageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}
export const UsersPageContainer = connect(mapStateToProps, {followedUser,
	addUsers,
	setCurrentPage,
	setIsFetching,
	setTotalCount})(UsersPageClass);


