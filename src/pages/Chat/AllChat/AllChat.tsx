import s from './AllChat.module.scss';

import defaultImg from '../../../assets/img/ava_default.jpg';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ChatStateType} from "../../../store/reducers/chatReducer";
import {NavLink} from "react-router-dom";
import {PathURL} from "../../../app/Routing/Routing";

export const AllChat = () => {

	const chat = useSelector<AppRootStateType, ChatStateType>(state => state.chat);
	const chatUsers = Object.keys(chat);

	const setActive = ({isActive}: {isActive: boolean}) => (isActive ? `${s.menu__item_active}` : "");

	return (
		<section className={s.allChat}>

			<div className={s.allChat__title}>
				Chat
			</div>

			{
				chatUsers.map((el) => {
					return (
						<NavLink key={el} to={`/chat/${el}`} className={setActive} >
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
}