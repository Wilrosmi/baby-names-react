import Name from "./nameInterface";

function genderReturn(nameObj: Name): "f" | "m" {
  if (nameObj.sex === 0) {
    return "f";
  } else {
    return "m";
  }
}

export default genderReturn;
