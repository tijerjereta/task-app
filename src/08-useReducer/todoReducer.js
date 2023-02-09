export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...initialState, action.payload];

    case "[TODO] Remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done, //La negacion de su estado, o sea el contrario
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
