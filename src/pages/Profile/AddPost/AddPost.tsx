import { ChangeEvent, FC } from 'react';

import s from './AddPost.module.scss';

import { Button } from '@/components/Button/Button.tsx';

type PropsType = {
  changeMessage: string;
  addNewPost: () => void;
  oChangeHandlerPostText: (text: string) => void;
};

export const AddPost: FC<PropsType> = ({ changeMessage, addNewPost, oChangeHandlerPostText }) => {
  const onClickHandler = (): void => {
    if (changeMessage) {
      addNewPost();
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = event.currentTarget.value;

    oChangeHandlerPostText(text);
  };

  return (
    <div className={s.addPost}>
      <div className={s.addPost__title}>New post</div>
      <div className={s.addPost__txt}>
        <textarea name="new-post" placeholder="your news..." onChange={onChangeText} value={changeMessage} />
      </div>
      <div className={s.addPost__btn}>
        <Button variant="primary" onClick={onClickHandler} type="button" value="Send" />
        {/* <button onClick={onClickHandler} >Send</button> */}
      </div>
    </div>
  );
};
