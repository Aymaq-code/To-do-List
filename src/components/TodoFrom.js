import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export default function TodoFrom() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Todo details..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        disabled={!title || !text}
        onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo(title, text));
          setTitle("");
          setText("");
        }}>
        Add Task
      </button>
    </form>
  );
}
