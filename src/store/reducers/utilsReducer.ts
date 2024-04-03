// eslint-disable-next-line import/no-cycle
import { setAuthLoginTC } from '@/store/reducers/authReducer.ts';
// eslint-disable-next-line import/no-cycle
import { AppThunkType } from '@/store/store.ts';

export type ActionUtilsType = ReturnType<typeof setIsFetching> | ReturnType<typeof initializedSuccess>;

type UtilsStateType = {
  isFetching: boolean;
  initialized: boolean;
};

const initialState: UtilsStateType = {
  isFetching: false,
  initialized: false,
};

// eslint-disable-next-line default-param-last
export const utilsReducer = (state = initialState, action: ActionUtilsType): UtilsStateType => {
  switch (action.type) {
    case 'UTILS/TOGGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case 'UTILS/INITIALIZED_SUCCESS': {
      return {
        ...state,
        initialized: action.initialized,
      };
    }

    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setIsFetching = (isFetching: boolean) => {
  return {
    type: 'UTILS/TOGGLE_IS_FETCHING',
    isFetching,
  } as const;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const initializedSuccess = (initialized: boolean) => {
  return {
    type: 'UTILS/INITIALIZED_SUCCESS',
    initialized,
  } as const;
};

export const initializeApp = (): AppThunkType => dispatch => {
  dispatch(setIsFetching(true));
  const promiseResult = dispatch(setAuthLoginTC());

  Promise.all([promiseResult])
    .then(() => {
      dispatch(initializedSuccess(true));
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};
