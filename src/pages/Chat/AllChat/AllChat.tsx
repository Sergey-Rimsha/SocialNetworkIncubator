
import s from './AllChat.module.scss';

import defaultImg from '../../../assets/img/ava_default.jpg';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {InUser} from "../../../store/reducers/dialogsReducer";

export const AllChat = () => {

	const chatUsers = useSelector<AppRootStateType, InUser[]>(state => state.dialogsPage.chatUsers)

	return (
		<section className={s.allChat}>

			<div className={s.allChat__title}>
				Chat
			</div>

			{
				chatUsers.map((el) => {
					return (
						<div key={el.id} className={`${s.allChat__item} ${s.user}`}>
							<div className={s.user__header}>
								<div className={s.user__ava}>
									<img src={defaultImg} alt={'ava'}/>
								</div>
								<div className={s.user__name}>
									{el.name}
								</div>
							</div>
							<div className={s.user__message}>
								Lorem ipsum dolor sit amet,
								consectetur adipisicing elit.
								Consectetur expedita fugit nemo
							</div>
						</div>
					)
				})
			}
		</section>
	)
}