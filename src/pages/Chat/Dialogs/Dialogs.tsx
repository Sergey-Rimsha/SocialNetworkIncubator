import defaultImg from '../../../assets/img/ava_default.jpg';
import sendImg from '../../../assets/img/send_img.png';
import s from './Dialog.module.scss';
import {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {InMessage} from "../../../store/reducers/dialogsReducer";


export type DialogsPropsType = {
	onChangeHandler: (text: string) => void
	sendMessage: () => void
}


export const Dialogs = (props: DialogsPropsType) => {

	const messages = useSelector<AppRootStateType, InMessage[]>((state) => state.dialogsPage.messages);
	const changeMessChat = useSelector<AppRootStateType, string>(state => state.dialogsPage.changeMessChat)

	const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeHandler(e.currentTarget.value);
	}

	const onClickHandlerMessage = () => {
		props.sendMessage()
	};


	return (
		<section className={s.dialogs}>
			<div className={s.dialogs__header}>
				<div className={s.dialogs__info}>
					<div className={s.dialogs__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.dialogs__name}>
						Nika Jerrardo
					</div>
				</div>
			</div>
			<div className={`${s.dialogs__chat} ${s.chat}`}>

				{messages.map((el) => {
					return (
						<div key={el.id} className={`${s.chat__item} ${s.user}`}>
							<div className={s.user__ava}>
								<img src={defaultImg} alt={'ava'}/>
							</div>
							<div className={s.user__message}>
								{el.message}
							</div>
						</div>
					)
				})}

				<div className={`${s.chat__item} ${s.my}`}>
					<div className={s.my__message}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
					</div>
				</div>

			</div>

			<div className={s.addMessage}>
				<textarea
					value={changeMessChat}
					onChange={onChangeMessage}
					className={s.addMessage__textarea}
					placeholder={'Type a message here'}
				/>
				<div className={s.addMessage__button}>
					<button onClick={onClickHandlerMessage}>
						<img src={sendImg} alt={'send'}/>
					</button>
				</div>

			</div>

		</section>
	)
};