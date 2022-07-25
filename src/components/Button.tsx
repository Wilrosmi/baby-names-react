interface Prop {
  gender: "a" | "f" | "m";
  setFilter: React.Dispatch<React.SetStateAction<"a" | "f" | "m">>;
  word: string;
}

function Button({ gender, setFilter, word }: Prop): JSX.Element {
  return (
    <button
      typeof="radio"
      className={gender}
      name="filter"
      onClick={() => setFilter(gender)}
    >
      {word}
    </button>
  );
}

export default Button;
