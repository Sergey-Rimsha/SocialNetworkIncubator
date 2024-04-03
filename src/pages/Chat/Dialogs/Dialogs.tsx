import { ChangeEvent, FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import defaultImg from '../../../assets/img/ava_default.jpg';
import sendImg from '../../../assets/img/send_img.png';

import s from './Dialog.module.scss';

import { ChatStateType } from '@/store/reducers/chatReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

export type DialogsPropsType = {
  sendMessage: (userChat: string, text: string) => void;
};

export const Dialogs: FC<DialogsPropsType> = ({ sendMessage }) => {
  const [newMassage, setNewMassage] = useState('');

  const { userChat } = useParams();

  const chat = useSelector<AppRootStateType, ChatStateType>(state => state.chat);

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewMassage(e.currentTarget.value);
  };

  const onClickHandlerMessage = (): void => {
    if (userChat && newMassage) {
      sendMessage(userChat, newMassage);
      setNewMassage('');
    }
  };

  return (
    <section className={s.dialogs}>
      <div className={s.dialogs__header}>
        <div className={s.dialogs__info}>
          <div className={s.dialogs__ava}>
            <img src={defaultImg} alt="ava" />
          </div>
          {/* /* TODO need to fix next line /* */}
          {/* <div className={s.dialogs__name}>{userChat || chat[0]}</div> */}
        </div>
      </div>

      <div className={`${s.dialogs__chat} ${s.chat}`}>
        {userChat
          ? chat[userChat].map(el => {
              if (el.user_id !== 'my') {
                return (
                  <div key={el.id} className={`${s.chat__item} ${s.user}`}>
                    <div className={s.user__ava}>
                      <img src={defaultImg} alt="ava" />
                    </div>
                    <div className={s.user__message}>{el.message}</div>
                  </div>
                );
              }

              return (
                <div key={el.id} className={`${s.chat__item} ${s.my}`}>
                  <div className={s.my__message}>{el.message}</div>
                </div>
              );
            })
          : ''}
      </div>

      <div className={s.addMessage}>
        <textarea
          value={newMassage}
          onChange={onChangeMessage}
          className={s.addMessage__textarea}
          placeholder="Type a message here"
        />
        <div className={s.addMessage__button}>
          <button type="button" onClick={onClickHandlerMessage}>
            <img src={sendImg} alt="send" />
          </button>
        </div>
      </div>
    </section>
  );
};
