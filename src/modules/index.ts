import { combineReducers } from "redux";
import wordList from "./wordList";

const rootReducer = combineReducers({
  wordList
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
