interface Prop {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ inputVal, setInputVal }: Prop): JSX.Element {
  return (
    <input
      id="search-bar"
      onChange={(e) => setInputVal(e.target.value)}
      value={inputVal}
    />
  );
}

export default SearchBar;
