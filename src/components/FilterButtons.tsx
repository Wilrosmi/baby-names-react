interface Prop {
  setFilter: React.Dispatch<React.SetStateAction<"a" | "f" | "m">>;
}

function FilterButtons(props: Prop): JSX.Element {
  return (
    <div>
      <button
        className="filter-button"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("a")}
      >
        A
      </button>
      <button
        className="filter-button"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("m")}
      >
        M
      </button>
      <button
        className="filter-button"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("f")}
      >
        F
      </button>
    </div>
  );
}

export default FilterButtons;
