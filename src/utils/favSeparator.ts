import Name from "./nameInterface";

function favSeparator(nameList: [Name, 0 | 1][], num: 0 | 1): [Name, 0 | 1][] {
  return nameList.filter((x) => x[1] === num);
}

export default favSeparator;
