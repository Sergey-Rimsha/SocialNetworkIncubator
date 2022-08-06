import React, {ChangeEvent, useState} from "react";
import {UserType} from "../../../store/reducers/profileReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";

import s from '../Profile.module.scss';

type ProfileInfoPropsType = {
	status: string
	user: UserType
	changeStatus: string
	addStatus: () => void
	onChangeStatusText: (text: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {

	const [editMode, setEditMode] = useState<boolean>(false);
	const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

	const onDoubleClick = () => {
		if (props.user.userId === loginId) {
			setEditMode(true)
		}
	}

	const onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeStatusText(e.currentTarget.value);
	}

	const onBlurHandler = () => {
		setEditMode(false);
		props.addStatus();
	}

	const showStatus = () => {
		return (
			<>
				{!editMode ?
					<span onDoubleClick={onDoubleClick}>{`status: ${props.status || ''}`}</span>
					: <input onChange={onChangeStatusText} autoFocus={true} onBlur={onBlurHandler} value={props.changeStatus}/>
				}
			</>
		)
	}

	const showContacts = () => {
		return (
			Object.keys(props.user.contacts).map(key => {
				if (props.user.contacts[key]) {
					return (
						<div key={key} className={s.user__website}>
							<a href={`https://${props.user.contacts[key]}`}>{key}</a>
						</div>
					)
				} else  {
					return ''
				}
			})
		)
	}

	return (
		<div className={s.user__info}>
			<div className={s.user__name}>
				{props.user.fullName}
			</div>
			<div className={s.user__status}>
				{showStatus()}
			</div>
			<div className={s.user__aboutMe}>
				{props.user.aboutMe || ''}
			</div>

			<div className={s.user__lookingForAJob}>
				{props.user.lookingForAJob ? props.user.lookingForAJobDescription : ''}
			</div>
			{/*<div className="user__education">*/}
			{/*	БГПК*/}
			{/*</div>*/}
			{/*<div className="user__web-site">*/}
			{/*	<a href="https://github.com/Sergey-Rimsha">https://github.com/Sergey-Rimsha</a>*/}
			{/*</div>*/}
			<div className={s.user__link}>
				<span>Link:</span>
				{showContacts()}
			</div>

		</div>
	)
}