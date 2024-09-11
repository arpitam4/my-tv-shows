import { AnyAction } from "redux";
import {
  SHOWS_LOADED,
  SHOWS_LOADING,
  SHOWS_LOADING_ERROR,
} from "../store/actionTypes";

export type State = {
  shows: Record<number, any>;
  query: string;
  loading: boolean;
  error: string | null;
};

export const initialState: State = {
  shows: {},
  query: "",
  loading: false,
  error: null,
};

function showReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SHOWS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SHOWS_LOADED:
      return {
        ...state,
        loading: false,
        shows: { ...state.shows, ...action.payload },
      };

    case SHOWS_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default showReducer;
