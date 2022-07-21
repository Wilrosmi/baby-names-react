import Name from "./nameInterface";

const nameSortAlpha = (a: Name, b: Name) => {
    let i = 0;
    while (a.name.charAt(i - 1) !== undefined && b.name.charAt(i - 1) !== undefined) {
      if (a.name.length === i) {
        return -1
      } else if (b.name.length === i ) {
        return +1
      } else {
        if (a.name.charCodeAt(i) === b.name.charCodeAt(i)) {
          i += 1;
          continue;
        } else {
          return a.name.charCodeAt(i) - b.name.charCodeAt(i);
        }
      }
    }
    return NaN;
  };

  export default nameSortAlpha;