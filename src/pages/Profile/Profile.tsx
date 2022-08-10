import React, {useEffect, useState} from "react";
import UserImg from "../../assets/img/ava_default.jpg";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPost} from "./AddPost/AddPost";
import {ProfileStateType} from "../../store/reducers/profileReducer";

import s from './Profile.module.scss';
import {Button} from "../../components/Button/Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {useParams} from "react-router-dom";
import {EditeProfile} from "./EditeProfile/EditeProfile";
import {LoadingPhoto} from "./EditeProfile/LoadingPhoto/LoadingPhoto";


type StateType = {
	profilePage: ProfileStateType
	status: string
	changeStatus: string
	addNewPost: () => void
	addStatus: () => void
	onChangeHandlerPostText: (text: string) => void
	onChangeStatusText: (text: string) => void
	addPhoto: (file: File) => void
}

export const Profile = React.memo((props: StateType) => {

	const [editeProfile, setEditeProfile] = useState<boolean>(false);

	const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

	const params = useParams();

	const userPhoto: string = props.profilePage.user.photos.large;

	const onClickHandlerEditeMode = (edit: boolean) => {
		setEditeProfile(edit);
	}

	const saveSettings = (photo: File) => {
		if (photo) {
			props.addPhoto(photo);
			setEditeProfile(false);
		}
	}

	useEffect(() => {
		if (params.userId + '' === loginId + '') {
			// setEditeProfile(true)
		}
	}, [params.userId, loginId])


	return (
		<section className={s.profile}>
			<div className={s.user}>
				<div>
					<div className={s.user__img}>
						<img src={userPhoto || UserImg} alt="user-img"/>
					</div>

					<div className={s.user__edite}>
						<LoadingPhoto saveSettings={saveSettings}/>
					</div>
				</div>

				{
					!editeProfile &&
					<div>
						<ProfileInfo
							status={props.status}
							changeStatus={props.changeStatus}
							addStatus={props.addStatus}
							user={props.profilePage.user}
							onChangeStatusText={props.onChangeStatusText}
						/>
						<Button
							color={'primary'}
							value={'edit'}
							onClick={() => onClickHandlerEditeMode(true)}
						/>
					</div>
				}
				{editeProfile && <EditeProfile onClickHandlerEditeMode={onClickHandlerEditeMode} />}
			</div>

			<AddPost
				changeMessage={props.profilePage.changeMessage}
				addNewPost={props.addNewPost}
				oChangeHandlerPostText={props.onChangeHandlerPostText}/>
			{
				props.profilePage.posts.map((post, i) => {
					return (
						<Post
							key={i}
							id={post.id}
							message={post.message}
							likesCount={post.likesCount}
						/>
					)
				})
			}

		</section>
	)
})

