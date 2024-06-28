import { useState } from "react";
import GameMap from "./components/GameMap";
import Start from "./components/Start";

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState(null);

  function gameInformation() {
    if (winner && !inProgress) return "Use the reset button to reset the board";
    if (inProgress) return "Game is in progress";
    if (!winner && !inProgress) return `Press play to start the game 😀`;
  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className=" text-white mb-10 text-2xl">
        <p>{gameInformation()}</p>
      </div>
      <div className="flex flex-row items-center">
        <Start
          inProgress={inProgress}
          setInProgress={setInProgress}
          setReset={setReset}
          winner={winner}
        />
        <GameMap
          inProgress={inProgress}
          setInProgress={setInProgress}
          reset={reset}
          setReset={setReset}
          setWinner={setWinner}
        />
        {winner ? (
          <p className="text-white text-5xl ml-10">{winner} wins the game!!!</p>
        ) : null}
      </div>
    </div>
  );
}
export default App;
