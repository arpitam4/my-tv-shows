import axios from "axios";
import { Dispatch } from "redux";
import {
  SHOWS_LOADED,
  SHOWS_LOADING,
  SHOWS_LOADING_ERROR,
} from "./actionTypes";
import { normalize } from "normalizr";
import { showSchema } from "./schemas";
import { Show } from "../models/Show";

export const loadShows = (query: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: SHOWS_LOADING });

    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const shows = response.data.map((item: { show: Show }) => item.show);

    const normalizedData = normalize(shows, [showSchema]);

    dispatch({
      type: SHOWS_LOADED,
      payload: normalizedData.entities.shows,
    });
  } catch (error) {
    dispatch({ type: SHOWS_LOADING_ERROR, error });
  }
};
