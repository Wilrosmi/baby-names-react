import NameDisplay from "./components/NameDisplay";
import NameProp from "./utils/namePropInt";

function App(props: NameProp): JSX.Element {
  return <NameDisplay names={props.names} />;
}

export default App;
