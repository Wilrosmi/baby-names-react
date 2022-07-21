import NameProp from "../utils/namePropInt";

function NameDisplay(props: NameProp): JSX.Element {
  return (
    <>
      {props.names.map((nameObj) => (
        <p key={nameObj.id} className={nameObj.sex}>
          {nameObj.name}
        </p>
      ))}
    </>
  );
}

export default NameDisplay;
