import { useEffect, useState } from "react";
import playGame from "../utils/playGame";
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

  return (
    <div className=" flex flex-row flex-wrap h-60 w-60 bg-black">
      {arr.map((square, index) => {
        return (
          <div
            key={index}
            className="gameSquares"
            onClick={(e) => {
              playGame(e, inProgress, turn, setTurn, index, ids, setIds);
              //   evaluateGame(ids);
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
