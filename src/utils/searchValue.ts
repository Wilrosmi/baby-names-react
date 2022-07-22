import Name from "./nameInterface";

function searchFilter(
  val: string,
  gender: "a" | "m" | "f",
  names: [Name, 0 | 1][]
): [Name, 0 | 1][] {
  let list = nonFavFilter(val, names);
  list = genderFilter(gender, list);
  return list;
}

function nonFavFilter(val: string, names: [Name, 0 | 1][]): [Name, 0 | 1][] {
  return names.filter((nameObj) => {
    return nameObj[0].name.toLowerCase().indexOf(val.toLowerCase()) === 0;
  });
}

function genderFilter(
  gender: "a" | "m" | "f",
  names: [Name, 0 | 1][]
): [Name, 0 | 1][] {
  if (gender === "a") {
    return names;
  } else {
    return names.filter((nameObj) => nameObj[0].sex === gender);
  }
}

export default searchFilter;
