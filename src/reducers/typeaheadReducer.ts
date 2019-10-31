import { Reducer } from 'redux';
import { IRepositoriesState, RepositoriesTypes } from '../types';

const INITIAL_STATE: IRepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<IRepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case RepositoriesTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;