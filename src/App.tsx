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

function App({ names }: Prop): JSX.Element {
  const startingNameList: [Name, 0 | 1][] = names.map(startList);

  const [inputVal, setInputVal] = useState(""); //Controls the search bar
  const [nameList, setNameList] = useState(startingNameList); //Controls names to be rendered in main and fav lists
  const [filter, setFilter] = useState<"a" | "m" | "f">("a"); //Controls radio button filters

  return (
    <>
      <SearchBar inputVal={inputVal} setInputVal={setInputVal} />
      <FilterButtons setFilter={setFilter} />
      <hr />
      <Favourites
        nameList={favSeparator(nameList, 1)} //FavSep only returns names to go into the fav list
        setNameList={setNameList}
      />
      <hr />
      <NameDisplay
        nameList={searchFilter(inputVal, filter, favSeparator(nameList, 0))} //See above, but for main list
        setNameList={setNameList}
      />
    </>
  );
}

export default App;
