const sum = require("./sum");

test("Add 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});
