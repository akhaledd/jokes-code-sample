import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getJokes } from "../actions/jokes.actions";
import JokesList from "../components/JokesList";
import LikedJokesToggle from "../components/LikedJokesToggle";

const JokesPage: React.FC = () => {
  const dispatch = useDispatch();

  const [likedOnly, setLikedOnly] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getJokes());
  }, [dispatch]);

  return (
    <div className='jokes-page'>
      <div className='jokes-page__header'>
        <h1>Jokes List</h1>
        <LikedJokesToggle likedOnly={likedOnly} setLikedOnly={setLikedOnly} />
      </div>

      <JokesList likedOnly={likedOnly} />
    </div>
  );
};

export default memo(JokesPage);
