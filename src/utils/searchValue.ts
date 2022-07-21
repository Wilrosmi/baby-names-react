import Name from "./nameInterface";

function searchFilter(val: string, names: Name[]): Name[] {
  return names.filter((nameObj) => {
    return nameObj.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
  });
}

export default searchFilter;
