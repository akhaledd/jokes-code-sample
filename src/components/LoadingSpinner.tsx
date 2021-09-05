import React, { memo } from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className='loading'>
      <div className='loading__spinner'></div>
    </div>
  );
};

export default memo(LoadingSpinner);
