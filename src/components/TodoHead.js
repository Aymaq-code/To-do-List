import { useDispatch } from "react-redux";
import { clearAll, setSearchTerm } from "../redux/actions";
import { useState } from "react";

export default function TodoHead({ todos }) {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearchTerm(value));
  }

  return (
    <div className="head">
      <div>
        <h2>To-Do List 📒</h2>
      </div>

      <div className="head-left">
        <h3>
          List Found <span>{todos.length}</span>
        </h3>

        <input
          type="text"
          placeholder="Search notes..."
          value={searchInput}
          onChange={handleSearch}
        />

        <button
          disabled={todos.length === 0}
          onClick={() => dispatch(clearAll())}>
          Clear All List
        </button>
      </div>
    </div>
  );
}
