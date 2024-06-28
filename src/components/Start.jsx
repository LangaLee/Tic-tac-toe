import { useState } from "react";

const Start = ({ winner, inProgress, setInProgress, setReset }) => {
  return (
    <div className="flex flex-col">
      <button
        className={inProgress || winner ? "disabledButton" : "gameButton"}
        onClick={() => {
          if (!winner) setInProgress(true);
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
