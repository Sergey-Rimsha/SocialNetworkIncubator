import { ChangeEvent, memo, useState } from 'react';

import s from '../../Profile.module.scss';

import { Button } from '@/components/Button/Button.tsx';

type LoadingPhotoPropsType = {
  saveSettings: (photo: File) => void;
};

export const LoadingPhoto = memo((props: LoadingPhotoPropsType) => {
  const [photo, setPhoto] = useState<File>();
  const [editMode, setEditMode] = useState<boolean>(false);

  const savePhoto = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.files) {
      setPhoto(e.currentTarget.files[0]);
    }
  };

  const onSaveSettings = (photo: File): void => {
    props.saveSettings(photo);
  };

  const onHandleClickSaveSettings = (): void => {
    if (photo) {
      onSaveSettings(photo);
      setEditMode(false);
      setPhoto(undefined);
    }
  };

  const onHandlerEditeMode = (): void => {
    setEditMode(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!editMode ? (
        <Button variant="primary" onClick={onHandlerEditeMode}>
          Edit
        </Button>
      ) : (
        <div className={s.user__editeBlock}>
          <input id="photo" name="photo" type="file" accept="image/png, image/jpeg" onChange={savePhoto} />
          <Button variant="secondary" onClick={onHandleClickSaveSettings}>
            save
          </Button>
        </div>
      )}
    </>
  );
});
