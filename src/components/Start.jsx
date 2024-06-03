const Start = ({ setInProgress, setReset }) => {
  return (
    <div className="flex flex-col">
      <button
        className="gameButton"
        onClick={() => {
          setInProgress(true);
        }}
      >
        Play
      </button>

      <button
        className="gameButton mt-2"
        onClick={() => {
          setReset(true);
          setInProgress(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Start;
