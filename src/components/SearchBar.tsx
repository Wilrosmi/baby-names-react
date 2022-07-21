interface Prop {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({state, setState}: Prop): JSX.Element {
    return (
        <input onChange={e => setState(e.target.value)} value={state}/>
    )
}

export default SearchBar;