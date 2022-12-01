import input from "./test.json";
import { Food } from "./food";

let food = new Food();
test("richest elf carries 24000", () => {
  expect(food.richestElf(input.lembas)).toBe(24000);
});

test("richest three elves carry 45000", () => {
  expect(food.richestThreeElves(input.lembas)).toBe(45000);
});
