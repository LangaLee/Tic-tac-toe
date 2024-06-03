import { useState } from "react";
import GameMap from "./components/GameMap";
import Start from "./components/Start";

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState(null);
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Start setInProgress={setInProgress} setReset={setReset} />
      <GameMap
        inProgress={inProgress}
        setInProgress={setInProgress}
        reset={reset}
        setReset={setReset}
        setWinner={setWinner}
      />
    </div>
  );
}
export default App;
