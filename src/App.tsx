import NameDisplay from "./components/NameDisplay";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import searchFilter from "./utils/searchValue";
import Name from "./utils/nameInterface";
import startList from "./utils/startingNameList";
import Favourites from "./components/Favourites";
import favSeparator from "./utils/favSeparator";
import FilterButtons from "./components/FilterButtons";

interface Prop {
  names: Name[];
}

function App({names}: Prop): JSX.Element {
  const startingNameList: [Name, 0 | 1][] = names.map(startList);

  const [inputVal, setInputVal] = useState("");
  const [nameList, setNameList] = useState(startingNameList);
  const [filter, setFilter] = useState<"a" | "m" | "f">("a");

  return (
    <>
      <SearchBar inputVal={inputVal} setInputVal={setInputVal} />
      <FilterButtons setFilter={setFilter} />
      <hr />
      <Favourites
        nameList={favSeparator(nameList, 1)}
        setNameList={setNameList}
      />
      <hr />
      <NameDisplay
        nameList={searchFilter(inputVal, filter, favSeparator(nameList, 0))}
        setNameList={setNameList}
      />
    </>
  );
}

export default App;
