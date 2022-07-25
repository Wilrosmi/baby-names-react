import Name from "../utils/nameInterface";
import update from "../utils/update"

interface Prop {
  nameList: [Name, 0 | 1][];
  setNameList: React.Dispatch<React.SetStateAction<[Name, 0 | 1][]>>;
}

function Favourites(props: Prop): JSX.Element {
  return (
    <div id="favList">
      {props.nameList.map((nameArr) => {
        return (
          <button
            key={nameArr[0].id}
            className={nameArr[0].sex}
            onClick={() => {
              props.setNameList((state) => {
                return update(state, nameArr[0].id, 0)
              });
            }}
          >
            {nameArr[0].name}
          </button>
        );
      })}
    </div>
  );
}

export default Favourites;
