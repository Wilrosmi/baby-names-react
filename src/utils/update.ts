import Name from "./nameInterface";

/**
 *
 * @param state the list of elements
 * @param iden the element to change, by its ID
 * @param changeTo the new binary value for the element
 * @returns the state with the relevant ID's binary value updated
 */
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
