import { useEffect, useState } from "react";
import playGame from "../utils/playGame";
import resetGame from "../utils/resetGame";
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
  }, [reset]);
  useEffect(() => {
    evaluateGame(ids, setInProgress, setWinner);
  }, [turn]);

  return (
    <div className="gameDiv flex flex-row flex-wrap h-60 w-60 bg-black">
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
