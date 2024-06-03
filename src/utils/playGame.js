const playGame = (e, inProgress, turn, setTurn, id, ids, setIds) => {
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

export default playGame;
