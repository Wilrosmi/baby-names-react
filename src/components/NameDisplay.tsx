import Name from "../utils/nameInterface";

interface Prop {
  nameList: [Name, 0 | 1][];
  setNameList: React.Dispatch<React.SetStateAction<[Name, 0 | 1][]>>;
}

function NameDisplay(props: Prop): JSX.Element {
  return (
    <div id="nameList">
      {props.nameList.map((nameObj) => {
        return (
          <button
            key={nameObj[0].id}
            className={nameObj[0].sex}
            onClick={() => {
              props.setNameList((state) => {
                for (const arr of state) {
                  if (arr[0].id === nameObj[0].id) {
                    arr[1] = 1;
                  }
                }
                return [...state];
              });
            }}
          >
            {nameObj[0].name}
          </button>
        );
      })}
    </div>
  );
}

export default NameDisplay;
