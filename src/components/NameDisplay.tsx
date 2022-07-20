import NameProp from "../utils/namePropInt";

function NameDisplay(props: NameProp): JSX.Element {
    return (
        <>
            {props.names.map((nameObj, index) => <p key={index}>{nameObj.name}</p>)}
        </>
    )
}

export default NameDisplay;