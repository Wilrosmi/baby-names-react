import Name from "./nameInterface";

//All names go into the main list at first

function startList(obj: Name): [Name, 0] {
  return [obj, 0];
}

export default startList;
