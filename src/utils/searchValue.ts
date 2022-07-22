import Name from "./nameInterface";

function searchFilter(val: string, names: [Name, 0 | 1][]): [Name, 0 | 1][] {
  return names.filter((nameObj) => {
    return nameObj[0].name.toLowerCase().indexOf(val.toLowerCase()) === 0;
  });
}

export default searchFilter;
