import s from './AllChat.module.scss';

import defaultImg from '../../../assets/img/ava_default.jpg';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ChatStateType} from "../../../store/reducers/chatReducer";
import {NavLink} from "react-router-dom";
import React from "react";

export const AllChat = React.memo(() => {
	const chat = useSelector<AppRootStateType, ChatStateType>(state => state.chat);
	const chatUsers = Object.keys(chat);

	const setActive = ({isActive}: { isActive: boolean }) => {
		// console.log(isActive)
		return (isActive ? `${s.active}` : `${s.link}`);
	};


	return (
		<section className={s.allChat}>

			<div className={s.allChat__title}>
				Chat
			</div>

			{
				chatUsers.map((el, i) => {
					return (
						<NavLink key={i} to={`/chat/${el}`} className={setActive}>
							<div className={`${s.allChat__item} ${s.user}`}>
								<div className={s.user__header}>
									<div className={s.user__ava}>
										<img src={defaultImg} alt={'ava'}/>
									</div>
									<div className={s.user__name}>
										{el}
									</div>
								</div>
								<div className={s.user__message}>
									{chat[el][chat[el].length - 1].message}
								</div>
							</div>
						</NavLink>
					)
				})
			}
		</section>
	)
})