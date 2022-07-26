import Name from "./nameInterface";

const nameSortAlpha = (a: Name, b: Name): number => {
  let i = 0;
  while (a.name.length > i && b.name.length > i) {
    //Should return before this is ever false
    if (a.name.charCodeAt(i) !== b.name.charCodeAt(i)) {
      //If the letters are diff, sort the earlier one first
      return a.name.charCodeAt(i) - b.name.charCodeAt(i);
    } else if (a.name.length === i + 1 || b.name.length === i + 1) {
      //If current letter is the last letter for one, sort that word first
      return a.name.length - b.name.length;
    }
    i++;
  }
  return NaN;
};

export default nameSortAlpha;
