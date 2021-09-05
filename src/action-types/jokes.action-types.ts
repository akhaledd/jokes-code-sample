import { JokeActionType } from "../constants/jokes.constants";
import Joke from "../models/Joke";

interface ListJokesRequestAction {
  type: JokeActionType.LIST_JOKES_REQUEST;
}

interface ListJokesSuccessAction {
  type: JokeActionType.LIST_JOKES_SUCCESS;
  payload: Joke[];
}

interface ListJokesFailAction {
  type: JokeActionType.LIST_JOKES_FAIL;
  payload: any;
}

interface LikeJokeAction {
  type: JokeActionType.LIKE_JOKE;
  payload: number[];
}

interface DislikeJokeAction {
  type: JokeActionType.DISLIKE_JOKE;
  payload: number[];
}

interface ResetJokeStatusAction {
  type: JokeActionType.RESET_JOKES_STATUS;
}

export type ListJokeAction = ListJokesRequestAction | ListJokesSuccessAction | ListJokesFailAction;
export type JokeStatusAction = LikeJokeAction | DislikeJokeAction | ResetJokeStatusAction;
