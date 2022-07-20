import { greet } from "./utils/greet";
import Name from "./utils/nameInterface"
import NameDisplay from "./components/NameDisplay";
import NameProp from "./utils/namePropInt";

function App(props: NameProp): JSX.Element {
  return <NameDisplay names={props.names} />;
}

export default App;
