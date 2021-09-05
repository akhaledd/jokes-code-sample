import React from "react";

interface Props {
  message: string;
}

const EmptyData: React.FC<Props> = ({ message }) => {
  return (
    <div className='empty-data'>
      <p className='empty-data__message'>{message}</p>
    </div>
  );
};

EmptyData.defaultProps = {
  message: "There are no data available.",
};

export default EmptyData;
