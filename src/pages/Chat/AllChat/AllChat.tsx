
import s from './AllChat.module.scss';

import defaultImg from '../../../assets/img/ava_default.jpg';

export const AllChat = () => {
	return (
		<section className={s.allChat}>
			<div className={s.user}>
				<div className={s.user__header}>
					<div className={s.user__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.user__name}>
						Luy Robin
					</div>
				</div>
				<div className={s.user__message}>
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					Consectetur expedita fugit nemo
				</div>
			</div>

			<div className={s.user}>
				<div className={s.user__header}>
					<div className={s.user__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.user__name}>
						Luy Robin
					</div>
				</div>
				<div className={s.user__message}>
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					Consectetur expedita fugit nemo
				</div>
			</div>
			<div className={s.user}>
				<div className={s.user__header}>
					<div className={s.user__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.user__name}>
						Luy Robin
					</div>
				</div>
				<div className={s.user__message}>
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					Consectetur expedita fugit nemo
				</div>
			</div>
			<div className={s.user}>
				<div className={s.user__header}>
					<div className={s.user__ava}>
						<img src={defaultImg} alt={'ava'}/>
					</div>
					<div className={s.user__name}>
						Luy Robin
					</div>
				</div>
				<div className={s.user__message}>
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					Consectetur expedita fugit nemo
				</div>
			</div>

		</section>
	)
}