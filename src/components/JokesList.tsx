import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { State } from "../reducers/root.reducer";
import EmptyData from "./EmptyData";
import JokesListItem from "./JokesListItem";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  likedOnly: boolean;
}

const defaultProps: Props = {
  likedOnly: false,
};

const JokesList: React.FC<Props> = ({ likedOnly }) => {
  let { jokes, loading } = useSelector((state: State) => state.listJokes);
  const { liked } = useSelector((state: State) => state.jokesStatus);

  const renderedJokes = useMemo(() => {
    if (!jokes) return [];

    if (likedOnly) jokes = jokes.filter((joke) => liked.indexOf(joke.id) >= 0);

    return jokes.map((joke) => <JokesListItem key={joke.id} joke={joke} />);
  }, [jokes, likedOnly, liked]);

  const emptyDataMessage = useMemo(
    () => (likedOnly ? "Oh sorry! you didn't like any of our jokes :(" : "There are no jokes available :("),
    [likedOnly]
  );

  return (
    <div className='jokes-list'>
      {loading ? (
        <LoadingSpinner />
      ) : renderedJokes.length > 0 ? (
        renderedJokes
      ) : (
        <EmptyData message={emptyDataMessage} />
      )}
    </div>
  );
};

JokesList.defaultProps = defaultProps;

export default memo(JokesList);
