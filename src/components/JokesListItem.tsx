import React, { useMemo } from "react";
import { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dislikeJoke, likeJoke } from "../actions/jokes.actions";
import Joke from "../models/Joke";
import { State } from "../reducers/root.reducer";

interface Props {
  joke: Joke;
}

const JokesListItem: React.FC<Props> = ({ joke }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const { liked, disliked } = useSelector((state: State) => state.jokesStatus);

  const isLiked = useMemo((): boolean => liked.indexOf(joke.id) >= 0, [joke, liked]);
  const isDisliked = useMemo((): boolean => disliked.indexOf(joke.id) >= 0, [joke, disliked]);

  const likeJokeHandler = (): void => dispatch(likeJoke(joke.id));
  const dislikeJokeHandler = (): void => dispatch(dislikeJoke(joke.id));

  return (
    <div className='jokes-list-item'>
      <p className='jokes-list-item__setup'>{joke.setup}</p>
      <p className='jokes-list-item__punchline'>{joke.punchline}</p>
      <div className='jokes-list-item__status'>
        <span onClick={likeJokeHandler} className={`fa fa-thumbs-o-up ${isLiked ? "active" : ""}`}></span>
        <span
          onClick={dislikeJokeHandler}
          className={`fa fa-thumbs-o-down ${isDisliked ? "active" : ""}`}></span>
      </div>
    </div>
  );
};

export default JokesListItem;
