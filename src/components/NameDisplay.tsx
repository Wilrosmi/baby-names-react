import Name from "../utils/nameInterface";
import ButtonMap from "./ButtonMap";

interface Prop {
  nameList: [Name, 0 | 1][];
  setNameList: React.Dispatch<React.SetStateAction<[Name, 0 | 1][]>>;
}

function NameDisplay({ nameList, setNameList }: Prop): JSX.Element {
  return (
    <div id="nameList">
      {
        <ButtonMap
          nameList={nameList}
          setNameList={setNameList}
          toChangeTo={1}
        />
      }
    </div>
  );
}

export default NameDisplay;
