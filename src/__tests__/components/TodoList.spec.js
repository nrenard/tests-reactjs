import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoList from "../../components/TodoList";

import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { list: ["Make coffe", "React"] }
};

const store = mockStore(INITIAL_STATE);

describe("Component TodoList", () => {
  it("should render the list", () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(wrapper.find("li").length).toBe(2);
  });

  it("should be able to add new todos", () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    wrapper
      .find("TodoList")
      .find("input[name='todo']")
      .simulate("change", { target: { value: "New todo" } });
    wrapper
      .find("TodoList")
      .find("button")
      .simulate("click");

    expect(store.getActions()).toContainEqual(TodosActions.addTodo("New todo"));
  });
});
