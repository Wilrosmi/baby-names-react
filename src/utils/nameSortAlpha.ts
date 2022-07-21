import Name from "./nameInterface";

const nameSortAlpha = (a: Name, b: Name): number => {
  let i = 0;
  while (a.name.length > i && b.name.length > i) {
    if (a.name.charCodeAt(i) !== b.name.charCodeAt(i)) {
      return a.name.charCodeAt(i) - b.name.charCodeAt(i);
    } else if (a.name.length === i + 1 || b.name.length === i + 1) {
      return a.name.length - b.name.length;
    }
    i++;
  }
  return NaN;
};

export default nameSortAlpha;
