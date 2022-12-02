import input from "./test.json";
import { Game } from "./game";

let game = new Game();
test("score must be 15", () => {
  expect(game.calculateStrategyScore(input.strategy)).toBe(15);
});

test("real score must be 12", () => {
  expect(game.calculateStrategyScore(input.strategy)).toBe(15);
});


