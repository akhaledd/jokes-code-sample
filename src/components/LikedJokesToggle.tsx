import React from "react";
import { Dispatch } from "react";
import ToggleInput from "./ToggleInput";

interface Props {
  likedOnly: boolean;
  setLikedOnly: Dispatch<boolean>;
}

const LikedJokesToggle: React.FC<Props> = ({ likedOnly, setLikedOnly }) => {
  const handleToggleChange = (): void => setLikedOnly(!likedOnly);

  return (
    <div className='liked-jokes-toggle'>
      <span className='fa fa-thumbs-o-up liked-jokes-toggle__icon'></span>
      <ToggleInput name='liked-toggle' id='liked-toggle' checked={likedOnly} onChange={handleToggleChange} />
    </div>
  );
};

export default LikedJokesToggle;
