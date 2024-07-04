import winningCombos from "./winingCombos";
const evaluateGame = (combinations) => {
  const Xcombinations = combinations.filter((combo) => combo[1] === "X");
  const Ocombinations = combinations.filter((combo) => combo[1] === "O");
  let player1;
  let player2;
  if (Xcombinations.length > Ocombinations.length) {
    player1 = Xcombinations;
    player2 = Ocombinations;
  } else {
    player2 = Xcombinations;
    player1 = Ocombinations;
  }

  const player1Evaluation = winningCombos.some((combo) => {
    return combo.every((num) => {
      return player1.flat().includes(num);
    });
  });
  if (player1Evaluation) return player1[0][1];

  const player2Evaluation = winningCombos.some((combo) => {
    return combo.every((num) => {
      return player2.flat().includes(num);
    });
  });
  if (player2Evaluation) return player1[0][1];
};

export default evaluateGame;
