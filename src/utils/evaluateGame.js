import winningCombos from "./winingCombos";
const evaluateGame = (ids) => {
  const Xsquares = ids
    .filter((arr) => {
      return arr[1] === "X";
    })
    .map((arr) => arr[0]);
  const Osquares = ids
    .filter((arr) => {
      return arr[1] === "O";
    })
    .map((arr) => arr[0]);

  let results = winningCombos.map((combinations) => {
    return combinations.map((num) => {
      if (Xsquares.includes(num)) return "X";
      else if (Osquares.includes(num)) return "O";
    });
  });
  let winner;
  results.forEach((res) => {
    if (res.every((letter) => letter === "X")) {
      winner = "X";
    }
    if (res.every((letter) => letter === "O")) {
      winner = "O";
    }
  });
  return winner;
};

export default evaluateGame;
