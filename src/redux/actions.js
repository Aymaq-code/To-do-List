export function addTodo(title, text) {
  return {
    type: "ADD",
    payload: {
      title,
      text,
    },
  };
}
export function removeTodo(id) {
  return { type: "REMOVE", payload: id };
}

export function clearAll() {
  return { type: "CLEAR" };
}
export function toggleDarkMode() {
  return { type: "TOGGLE_DARK" };
}

export const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});
