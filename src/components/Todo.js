import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const highlightText = (text) => {
    if (!searchTerm || !text) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };
  return (
    <li className="sticky">
      <div>
        <h3>Title: {highlightText(todo.title)}</h3>
        <p>
          <span>Note:</span> {highlightText(todo.text)}
        </p>
      </div>
      <button
        className="deleteBtn"
        onClick={() => dispatch(removeTodo(todo.id))}>
        🗑️
      </button>
    </li>
  );
}
