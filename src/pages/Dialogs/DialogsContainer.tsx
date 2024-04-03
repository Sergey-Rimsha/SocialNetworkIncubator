import { FC } from 'react';

import './dialogs.scss';

import { useSelector } from 'react-redux';

import { Dialogs } from './Dialogs';

import { addMessageChatAC, DialogsType, onChangeMessChatAC } from '@/store/reducers/dialogsReducer.ts';
import { AppDispatch, AppRootStateType } from '@/store/store.ts';

export const DialogsContainer: FC = () => {
  const dialogsPage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsPage);
  const dispatch = AppDispatch();

  const onChangeHandler = (text: string): void => {
    dispatch(onChangeMessChatAC(text));
  };

  const sendMessage = (): void => {
    dispatch(addMessageChatAC());
  };

  return <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage} onChangeHandler={onChangeHandler} />;
};
