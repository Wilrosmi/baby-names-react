import Name from "../utils/nameInterface"
import NameProp from "../utils/namePropInt";

function NameDisplay(props: NameProp): JSX.Element {
    return (
        <>
            <h1>{props.names[0].name}</h1>
        </>
    )
}

export default NameDisplay;