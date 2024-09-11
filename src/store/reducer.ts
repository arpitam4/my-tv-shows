import { combineReducers } from "redux";
import showReducer from "../Reducers/ShowReducer";

const rootReducer = combineReducers({
  shows: showReducer,
  // Add more reducers here if needed
});

export default rootReducer;
