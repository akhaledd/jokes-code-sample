import { JokeStatusAction, ListJokeAction } from "../action-types/jokes.action-types";
import {
  JokeActionType,
  JokeStatusInitialState,
  JokeStatusState,
  ListJokesState,
} from "../constants/jokes.constants";

export const listJokesReducer = (state: ListJokesState = {}, action: ListJokeAction): ListJokesState => {
  switch (action.type) {
    case JokeActionType.LIST_JOKES_REQUEST:
      return { loading: true };

    case JokeActionType.LIST_JOKES_SUCCESS:
      return { jokes: action.payload };

    case JokeActionType.LIST_JOKES_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const jokeStatusReducer = (
  state: JokeStatusState = JokeStatusInitialState,
  action: JokeStatusAction
): JokeStatusState => {
  switch (action.type) {
    case JokeActionType.LIKE_JOKE:
      return { ...state, liked: action.payload };

    case JokeActionType.DISLIKE_JOKE:
      return { ...state, disliked: action.payload };

    case JokeActionType.RESET_JOKES_STATUS:
      return JokeStatusInitialState;

    default:
      return state;
  }
};
