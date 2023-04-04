const Loading = () => {
  return (
    <div
      style={{ height: '60vh' }}
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
