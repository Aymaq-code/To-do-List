import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/actions";

export default function DarkButton() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <button className="darkBtn" onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
