import names from "../baby-names";
import Name from "./nameInterface";
import nameSortAlpha from "./nameSortAlpha";

test("Test if nameSortAlpha correctly sorts alphabetically", () => {
  expect(nameSortAlpha(nameA, nameB)).toBeGreaterThan(0);
  expect(nameSortAlpha(nameC, nameD)).toBeLessThan(0);
  expect(nameSortAlpha(nameE, nameF)).toBeLessThan(0);
});

const nameA: Name = {
  name: "Will",
  id: 0,
  sex: "m",
};
const nameB: Name = {
  name: "Wiill",
  id: 1,
  sex: "m",
};
const nameC: Name = {
  name: "Ang",
  id: 2,
  sex: "m",
};
const nameD: Name = {
  name: "Angie",
  id: 3,
  sex: "f",
};
const nameE: Name = {
  name: "Grace",
  id: 4,
  sex: "f",
};
const nameF: Name = {
  name: "Peter",
  id: 5,
  sex: "m",
};
