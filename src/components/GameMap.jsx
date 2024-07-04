import { useEffect, useState } from "react";
import evaluateGame from "../utils/evaluateGame";
const GameMap = ({ inProgress, setInProgress, reset, setReset, setWinner }) => {
  const arr = Array.from(Array(9));
  const [turn, setTurn] = useState(1);
  const [ids, setIds] = useState([]);

  let value;
  reset ? (value = "") : null;
  useEffect(() => {
    setIds([]);
    setReset(false);
    setWinner(null);
  }, [reset]);
  useEffect(() => {
    const winner = evaluateGame(ids);
    if (winner) {
      setWinner(winner);
      setInProgress(false);
    }
  }, [turn]);
  const playGame = (e, id) => {
    if (!inProgress) return;
    if (turn % 2 === 0 && ids.every((arr) => arr[0] !== id)) {
      e.target.innerText = "O";
      setTurn((prev) => prev + 1);
      e.target.ariaDisabled = true;
      setIds((prev) => [...prev, [id, "O"]]);
    } else if (ids.every((arr) => arr[0] !== id)) {
      e.target.innerText = "X";
      setTurn((prev) => prev + 1);
      e.target.ariaDisabled = true;
      setIds((prev) => [...prev, [id, "X"]]);
    }
  };
  return (
    <div className=" flex flex-row flex-wrap h-60 w-60 bg-black">
      {arr.map((square, index) => {
        return (
          <div
            key={index}
            className="gameSquares"
            onClick={(e) => {
              playGame(e, index);
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default GameMap;
