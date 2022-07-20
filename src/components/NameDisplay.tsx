import NameProp from "../utils/namePropInt";
import genderReturn from "../utils/objectGenderReturn";

function NameDisplay(props: NameProp): JSX.Element {
  return (
    <>
      {props.names.map((nameObj, index) => (
        <p key={index} className={genderReturn(nameObj)}>
          {nameObj.name}
        </p>
      ))}
    </>
  );
}

export default NameDisplay;
