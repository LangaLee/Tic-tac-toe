import evaluateGame from "../utils/evaluateGame";
// [[0,'X']]
describe("evaluateGame", () => {
  test("when passed winning combinatinons belonging to X returns X as the winner", () => {
    const combos = [
      [0, "X"],
      [1, "O"],
      [4, "X"],
      [3, "O"],
      [8, "X"],
    ];
    expect(evaluateGame(combos)).toBe("X");
  });
  test("when passed winning combinatinons belonging to O returns O as the winner", () => {
    const combos = [
      [0, "X"],
      [1, "O"],
      [2, "O"],
      [4, "O"],
      [5, "X"],
      [3, "O"],
      [6, "O"],
      [7, "X"],
      [8, "X"],
    ];
    expect(evaluateGame(combos)).toBe("O");
  });
  test("when passed no winning combinatinons returns undefined", () => {
    const combos = [
      [0, "X"],
      [1, "O"],
      [2, "O"],
    ];
    expect(evaluateGame(combos)).toBe(undefined);
  });
});
