import NameProp from "../utils/namePropInt";

function NameDisplay(props: NameProp): JSX.Element {
  return (
    <div id="nameList">
      {props.names.map((nameObj) => (
        <p key={nameObj.id} className={nameObj.sex}>
          {nameObj.name}
        </p>
      ))}
    </div>
  );
}

export default NameDisplay;
