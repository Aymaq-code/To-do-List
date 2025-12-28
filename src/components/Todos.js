import Todo from "./Todo";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.length > 0 && (
        <ul className="note">
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
