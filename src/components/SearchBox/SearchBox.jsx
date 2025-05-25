import css from "./SerchBox.module.css";

export default function SearchBox({ inputValue, onUpdate }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        id="searchBox"
        value={inputValue}
        onChange={onUpdate}
      />
    </div>
  );
}
