import { profileApi, UpdateProfileType, usersApi } from '@/shared/api/api.ts';
// eslint-disable-next-line import/no-cycle
import { setIsFetching } from '@/store/reducers/utilsReducer.ts';
import { AppThunkType } from '@/store/store.ts';

export type ProfileStateType = {
  user: UserType;
  status: string;
  posts: Array<PostType>;
  changeMessage: string;
  changeStatus: string;
};
export type UserType = {
  aboutMe: string | null;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  userId: number;
  contacts: ContactsType;
  photos: PhotosType;
};
export type PhotosType = {
  large: string;
  small: string;
};
export type ContactsType = {
  [key: string]: string;
};
export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ActionProfileType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof onChangeMessPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setChangeStatus>
  | ReturnType<typeof setPhotos>;

const initialState: ProfileStateType = {
  user: {
    aboutMe: '',
    fullName: '',
    lookingForAJob: true,
    lookingForAJobDescription: '',
    userId: 2,
    photos: {
      large: '',
      small: '',
    },
    contacts: {
      key: '',
    },
  },
  status: '',
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Hello', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ],
  changeMessage: '',
  changeStatus: '',
};

// eslint-disable-next-line default-param-last
export const profileReducer = (state = initialState, action: ActionProfileType): ProfileStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      const stateCopy = { ...state, posts: [...state.posts] };
      const mess: string = stateCopy.changeMessage;
      const newId: number = stateCopy.posts.length + 1;

      stateCopy.posts.push({ id: newId, message: mess, likesCount: 0 });
      stateCopy.changeMessage = '';

      return stateCopy;
    }

    case 'ON-CHANGE-MESS-POST': {
      return {
        ...state,
        changeMessage: action.text,
      };
    }
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
        changeStatus: action.status,
      };
    }
    case 'CHANGE_STATUS': {
      return {
        ...state,
        changeStatus: action.text,
      };
    }

    case 'PROFILE/SET_PHOTOS': {
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.photos,
        },
      };
    }
    default:
      return state;
  }
};

// actionCreates -- post

export const addPost = () => ({ type: 'ADD-POST' }) as const;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const onChangeMessPost = (text: string) => {
  return {
    type: 'ON-CHANGE-MESS-POST',
    text,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setUserProfile = (user: UserType) => {
  return {
    type: 'SET_USER_PROFILE',
    user,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setStatus = (status: string) => {
  return {
    type: 'SET_STATUS',
    status,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setChangeStatus = (text: string) => {
  return {
    type: 'CHANGE_STATUS',
    text,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setPhotos = (photos: PhotosType) => {
  return {
    type: 'PROFILE/SET_PHOTOS',
    photos,
  } as const;
};

// Thunk

export const setUserProfileTC =
  (userId: string): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    usersApi
      .getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));

        return data.userId;
      })
      .then(userId => {
        dispatch(setStatusUserTC(userId));
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };

export const setStatusUserTC =
  (userId: number): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    usersApi
      .getUserStatus(userId)
      .then(status => {
        dispatch(setStatus(status));
        dispatch(setIsFetching(false));
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };

export const putStatusUserTC =
  (status: string, userId: number): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    usersApi
      .putUserStatus(status)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setStatusUserTC(userId));
          dispatch(setIsFetching(false));
        }
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };

export const putPhotoProfileTC =
  (filePhoto: File): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    profileApi
      .updatePhoto(filePhoto)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setPhotos(data.data.photos));
        }
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };

export const putProfileTC =
  (profileData: UpdateProfileType): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    profileApi
      .updateProfile(profileData)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserProfileTC(profileData.userId));
        }
      })
      .catch(() => {
        // console.log(err);
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };
