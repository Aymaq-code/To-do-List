import DarkButton from "./components/DarkButton";
import TodoHead from "./components/TodoHead";
import TodoFrom from "./components/TodoFrom";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <DarkButton />
      <TodoHead todos={todos} />
      <TodoFrom />
      <Todos todos={todos} />
    </div>
  );
}
