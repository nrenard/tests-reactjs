export const Types = {
  ADD: "todo/ADD",
  COMPLETE: "todo/COMPLETE"
};

const INITIAL_STATE = {
  list: []
};

export default function todos(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.ADD:
      return {
        ...state,
        list: [...state.list, payload.todo]
      };
    case Types.COMPLETE:
      return {
        ...state,
        list: state.list.filter(todo => todo !== payload.todo)
      };
    default:
      return state;
  }
}

export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  }),

  completeTodo: todo => ({
    type: Types.COMPLETE,
    payload: { todo }
  })
};
