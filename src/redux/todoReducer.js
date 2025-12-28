const initialState = {
  todos: [],
  darkMode: false,
  searchTerm: "",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            title: action.payload.title,
            text: action.payload.text,
          },
        ],
      };

    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "CLEAR":
      return { ...state, todos: [] };

    case "TOGGLE_DARK":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
}

export default todoReducer;
