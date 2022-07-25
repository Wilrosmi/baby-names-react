import Name from "../utils/nameInterface";
import update from "../utils/update"
import ButtonMap from "./ButtonMap"

interface Prop {
  nameList: [Name, 0 | 1][];
  setNameList: React.Dispatch<React.SetStateAction<[Name, 0 | 1][]>>;
}

function Favourites({nameList, setNameList}: Prop): JSX.Element {
  return (
   <div id="favList">
      {
      <ButtonMap nameList={nameList} setNameList={setNameList} toChangeTo={0} />
      }
    </div>
  );
}

export default Favourites;
