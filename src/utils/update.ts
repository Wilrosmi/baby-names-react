import Name from "./nameInterface";

const update = (
  state: [Name, 0 | 1][],
  iden: number,
  changeTo: 0 | 1
): [Name, 0 | 1][] => {
  for (const arr of state) {
    if (arr[0].id === iden) {
      arr[1] = changeTo;
    }
  }
  return [...state];
};

export default update;
