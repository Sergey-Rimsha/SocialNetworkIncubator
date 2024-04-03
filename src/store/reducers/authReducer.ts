import { authApi, AuthDataType } from '@/shared/api/api.ts';
// eslint-disable-next-line import/no-cycle
import { setIsFetching } from '@/store/reducers/utilsReducer.ts';
// eslint-disable-next-line import/no-cycle
import { AppThunkType } from '@/store/store.ts';

export type AuthInitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export type ActionAuthType = ReturnType<typeof setAuth> | ReturnType<typeof setIsAuthLogin>;

export const authReducer = (
  // eslint-disable-next-line default-param-last
  state: AuthInitialStateType = initialState,
  action: ActionAuthType,
): AuthInitialStateType => {
  switch (action.type) {
    case 'SET_AUTH': {
      return {
        ...state,
        ...action.data,
      };
    }
    case 'SET_IS_AUTH': {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    default:
      return state;
  }
};

type SetAuthDataType = {
  id: number;
  email: string;
  login: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setAuth = (data: SetAuthDataType) => {
  return {
    type: 'SET_AUTH',
    data,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setIsAuthLogin = (isAuth: boolean) => {
  return {
    type: 'SET_IS_AUTH',
    isAuth,
  } as const;
};

// Thunk creators

export const setAuthLoginTC = (): AppThunkType => dispatch => {
  dispatch(setIsFetching(true));

  authApi
    .authLoginMe()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setIsAuthLogin(true));
        dispatch(setAuth(data.data));
      }
    })
    .catch(e => {
      dispatch(setIsAuthLogin(false));
      throw new Error(e);
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};

export const authLoginTC =
  (data: AuthDataType): AppThunkType =>
  dispatch => {
    dispatch(setIsFetching(true));
    authApi
      .authLogin(data)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthLoginTC());
        }
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };

export const authLogout = (): AppThunkType => dispatch => {
  dispatch(setIsFetching(true));
  authApi
    .authLogout()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setIsAuthLogin(false));
        dispatch(setIsFetching(false));
      }
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};
