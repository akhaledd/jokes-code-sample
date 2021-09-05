import { combineReducers } from "redux";
import { jokeStatusReducer, listJokesReducer } from "./jokes.reducer";

const reducers = combineReducers({
  listJokes: listJokesReducer,
  jokesStatus: jokeStatusReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
