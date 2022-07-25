import Button from "./Button";

interface Prop {
  setFilter: React.Dispatch<React.SetStateAction<"a" | "f" | "m">>;
}

function FilterButtons({ setFilter }: Prop): JSX.Element {
  return (
    <div id="radio-buttons">
      <Button gender={"a"} setFilter={setFilter} word={"All"} />
      <Button gender={"m"} setFilter={setFilter} word={"Male"} />
      <Button gender={"f"} setFilter={setFilter} word={"Female"} />
    </div>
  );
}

export default FilterButtons;
