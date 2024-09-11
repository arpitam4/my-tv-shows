import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ActionType } from '../store/actionTypes';

// function fetchShowsApi() {
//   return axios.get('https://api.tvmaze.com/shows'); // Your API call
// }

// // Worker saga: Fetches shows when watcher saga sees the action
// function* fetchShows() {
//   try {
//     const response = yield call(fetchShowsApi);
//     yield put({ type: ActionType.FETCH_SHOWS_SUCCESS, payload: response.data });
//   } catch (error) {
//     yield put({ type: ActionType.FETCH_SHOWS_FAILURE, payload: error.message });
//   }
// }

// // Watcher saga: Watches for actions dispatched to the store, starts worker saga
// export function* watchFetchShows() {
//   yield takeEvery(ActionType.FETCH_SHOWS_REQUEST, fetchShows);
// }
