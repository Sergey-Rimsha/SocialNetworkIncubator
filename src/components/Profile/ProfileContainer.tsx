import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {Profile} from "./Profile";
import {addPost, onChangeMessPost, ProfileStateType, setUserProfile, UserType} from "../../redux/reducerProfile";
import {StateType} from "../../redux/store";

type ProfileClassType = {
	profilePage: ProfileStateType
	addPost: () => void
	onChangeMessPost: (text: string) => void
	setUserProfile: (user: UserType) => void
}

class ProfileClass extends React.Component<ProfileClassType> {

	componentDidMount() {
		const axios = require('axios');
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response: axios.AxiosResponse) => {
				this.props.setUserProfile(response.data);
				console.log(response.data);
			})
	}

	render() {
		return (
			<>
				<Profile
					profilePage={this.props.profilePage}
					addNewPost={this.props.addPost}
					onChangeHandlerPostText={this.props.onChangeMessPost}
				/>
			</>
		)
	}
}


const mapStateToProps = (state: StateType) => {
	return {
		profilePage: state.profilePage
	}
}



export const ProfileContainer = connect(mapStateToProps, {addPost,onChangeMessPost,setUserProfile,})(ProfileClass)

