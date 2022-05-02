import React, {useState} from "react";
import {UserType} from "../../../redux/profileReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";

type ProfileInfoPropsType = {
	status: string
	user: UserType
}

export function ProfileInfo(props: ProfileInfoPropsType) {

	const [editMode, setEditMode] = useState<boolean>(false);

	const loginId = useSelector<AppRootStateType, number>(state => state.auth.id)

	const onDoubleClick = () => {
		if (props.user.userId === loginId) {
			setEditMode(true)
		}
	}

	const onBlurHandler = () => {
		setEditMode(false)
	}

	const showStatus = () => {
		return (
			<>
				{!editMode ?
					<span onDoubleClick={onDoubleClick}>{`status: ${props.status || ''}`}</span>
					: <input autoFocus={true} onBlur={onBlurHandler} value={props.status}/>
				}
			</>
		)
	}

	const showContacts = () => {
		return (
			Object.keys(props.user.contacts).map(key => {
				if (props.user.contacts[key]) {
					return (
						<div key={key} className="user__web-site">
							<a href={`https://${props.user.contacts[key]}`}>{key}</a>
						</div>
					)
				}
			})
		)
	}

	return (
		<div className="user__info">
			<div className="user__name">
				{props.user.fullName}
			</div>
			<div className="user__status">
				{showStatus()}
			</div>
			<div className="user__aboutMe">
				{props.user.aboutMe || ''}
			</div>

			<div className="user__lookingForAJob">
				{props.user.lookingForAJob ? props.user.lookingForAJobDescription : ''}
			</div>
			{/*<div className="user__education">*/}
			{/*	БГПК*/}
			{/*</div>*/}
			{/*<div className="user__web-site">*/}
			{/*	<a href="https://github.com/Sergey-Rimsha">https://github.com/Sergey-Rimsha</a>*/}
			{/*</div>*/}
			{showContacts()}
		</div>
	)
}