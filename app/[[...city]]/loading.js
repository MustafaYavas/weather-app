import React from 'react';

const Loading = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 92px)' }}
      className="d-flex justify-content-center align-items-center text-light"
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
