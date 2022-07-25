import Name from "../utils/nameInterface";
import update from "../utils/update";

interface Props {
  nameList: [Name, 0 | 1][];
  toChangeTo: 0 | 1;
  setNameList: React.Dispatch<React.SetStateAction<[Name, 0 | 1][]>>;
}

function ButtonMap({ nameList, toChangeTo, setNameList }: Props): JSX.Element {
  return (
    <>
      {nameList.map((nameArr) => {
        return (
          <button
            key={nameArr[0].id}
            className={nameArr[0].sex}
            onClick={() =>
              setNameList((state) => update(state, nameArr[0].id, toChangeTo))
            }
          >
            {nameArr[0].name}
          </button>
        );
      })}
    </>
  );
}

export default ButtonMap;
