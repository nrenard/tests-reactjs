import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("shoul be able to add todos", () => {
    const state = todosReducer({ list: [] }, TodosActions.addTodo("New todo"));
    expect(state.list[0]).toBe("New todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["Make coffe"];
    const state = todosReducer(
      { list: todos },
      TodosActions.completeTodo("Make coffe")
    );

    expect(state.list.length).toBe(0);
  });
});
