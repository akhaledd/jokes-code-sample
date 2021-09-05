import Joke from "../models/Joke";

// Constants
export enum JokeActionType {
  LIST_JOKES_REQUEST = "LIST_JOKES_REQUEST",
  LIST_JOKES_SUCCESS = "LIST_JOKES_SUCCESS",
  LIST_JOKES_FAIL = "LIST_JOKES_FAIL",
  LIKE_JOKE = "LIKE_JOKE",
  DISLIKE_JOKE = "DISLIKE_JOKE",
  RESET_JOKES_STATUS = "RESET_JOKES_STATUS",
}

// State Types
export interface JokeStatusState {
  liked: number[];
  disliked: number[];
}

export interface ListJokesState {
  loading?: boolean;
  jokes?: Joke[];
  error?: any;
}

// Initial States
export const JokeStatusInitialState: JokeStatusState = {
  liked: [],
  disliked: [],
};
