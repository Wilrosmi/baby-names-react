interface Prop {
  setFilter: React.Dispatch<React.SetStateAction<"a" | "f" | "m">>;
}

function FilterButtons(props: Prop): JSX.Element {
  return (
    <div id="radio-buttons">
      <button
        className="filter-button a"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("a")}
      >
        All
      </button>
      <button
        className="filter-button m"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("m")}
      >
        Male
      </button>
      <button
        className="filter-button f"
        typeof="radio"
        name="filter"
        onClick={() => props.setFilter("f")}
      >
        Female
      </button>
    </div>
  );
}

export default FilterButtons;
