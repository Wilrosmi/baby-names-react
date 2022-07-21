import NameDisplay from "./components/NameDisplay";
import NameProp from "./utils/namePropInt";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App(props: NameProp): JSX.Element {
  
  const [state, setState] = useState("");
  
  return ( 
    <>
      <SearchBar state={state} setState={setState}/>
      <NameDisplay names={props.names} />
    </>
  );
}

export default App;
