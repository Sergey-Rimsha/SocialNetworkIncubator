import React, {ChangeEvent, useEffect, useState} from "react";
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

export function Profile(props: StateType) {

	const [photo, setPhoto] = useState<File>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [showEditMode, setShowEditMode] = useState<boolean>(false);

	const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

	const params = useParams();

	const userPhoto: string = props.profilePage.user.photos.large;

	const savePhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files) {
			setPhoto(e.currentTarget.files[0])
		}
	}

	const saveSettings = () => {
		if (photo) {
			props.addPhoto(photo);
			setEditMode(false);
		}
	}

	const onHandlerEditeMode = () => {
		setEditMode(true);
	}



	useEffect(() => {
		if (params.userId + '' === loginId + '') {
			setShowEditMode(true)
		}
	},[params.userId, loginId])


	return (
		<section className={s.profile}>
			<div className={s.user}>
				<div>
					<div className={s.user__img}>
						<img src={userPhoto || UserImg} alt="user-img"/>
					</div>

					{
						!showEditMode ||
						<div className={s.user__edite}>
							{
								!editMode ?
									<Button
										onClick={onHandlerEditeMode}
										color={'primary'}
										value={'Edit'}/> :
									<div className={s.user__editeBlock}>
										<input
											id='photo'
											name={'photo'}
											type={"file"}
											accept='image/png, image/jpeg'
											onChange={savePhoto}
										/>
										<Button
											onClick={saveSettings}
											color={'secondary'}
											value={'save'}/>
									</div>
							}
						</div>
					}

				</div>

				<ProfileInfo
					status={props.status}
					changeStatus={props.changeStatus}
					addStatus={props.addStatus}
					user={props.profilePage.user}
					onChangeStatusText={props.onChangeStatusText}
				/>
			</div>


			{
				!showEditMode ||
				<>
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
				</>
			}

		</section>
	)
}

