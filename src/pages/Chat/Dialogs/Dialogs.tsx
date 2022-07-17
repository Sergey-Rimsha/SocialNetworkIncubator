import defaultImg from '../../../assets/img/ava_default.jpg';
import sendImg from '../../../assets/img/send_img.png';
import s from './Dialog.module.scss';


export const Dialogs = () => {
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

				<div className={`${s.chat__item} ${s.user}`}>
					<div className={s.user__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.user__message}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
					</div>
				</div>

				<div className={`${s.chat__item} ${s.my}`}>
					<div className={s.my__message}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
					</div>
				</div>

			</div>

			<div className={s.addMessage}>
				<textarea
					className={s.addMessage__textarea}
					placeholder={'Type a message here'}
				/>
				<div className={s.addMessage__button}>
					<button>
						<img src={sendImg} alt={'send'}/>
					</button>
				</div>

			</div>

		</section>
	)
};