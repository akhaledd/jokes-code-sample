import axios from "axios";
import { Dispatch } from "react";
import { JokeStatusAction, ListJokeAction } from "../action-types/jokes.action-types";
import { JokeActionType } from "../constants/jokes.constants";
import { State } from "../reducers/root.reducer";

const url: string = "https://official-joke-api.appspot.com/jokes/ten";

export const getJokes = () => async (dispatch: Dispatch<ListJokeAction>) => {
  try {
    dispatch({ type: JokeActionType.LIST_JOKES_REQUEST });

    const { data } = await axios.get(url);

    dispatch({
      type: JokeActionType.LIST_JOKES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JokeActionType.LIST_JOKES_FAIL,
      payload: "Failed fetching jokes",
    });
  }
};

export const likeJoke = (id: number) => (dispatch: Dispatch<JokeStatusAction>, getState: () => State) => {
  const { jokes, dislikedJokes, likedJokes } = getJokesFromState(getState);

  if (jokes && jokes.length > 0) {
    const dislikedIndex = dislikedJokes.indexOf(id);
    if (dislikedIndex >= 0) {
      dislikedJokes.splice(dislikedIndex, 1);
      dispatch({
        type: JokeActionType.DISLIKE_JOKE,
        payload: dislikedJokes,
      });
    }

    const likedIndex = likedJokes.indexOf(id);
    likedIndex >= 0 ? likedJokes.splice(likedIndex, 1) : likedJokes.push(id);

    dispatch({
      type: JokeActionType.LIKE_JOKE,
      payload: likedJokes,
    });
  }
};

export const dislikeJoke = (id: number) => (dispatch: Dispatch<JokeStatusAction>, getState: () => State) => {
  const { jokes, dislikedJokes, likedJokes } = getJokesFromState(getState);

  if (jokes && jokes.length > 0) {
    const likedIndex = likedJokes.indexOf(id);
    if (likedIndex >= 0) {
      likedJokes.splice(likedIndex, 1);
      dispatch({
        type: JokeActionType.LIKE_JOKE,
        payload: likedJokes,
      });
    }

    const dislikedIndex = dislikedJokes.indexOf(id);
    dislikedIndex >= 0 ? dislikedJokes.splice(dislikedIndex, 1) : dislikedJokes.push(id);

    dispatch({
      type: JokeActionType.DISLIKE_JOKE,
      payload: dislikedJokes,
    });
  }
};

const getJokesFromState = (getState: () => State) => {
  return {
    jokes: getState().listJokes.jokes,
    dislikedJokes: [...getState().jokesStatus.disliked],
    likedJokes: [...getState().jokesStatus.liked],
  };
};
