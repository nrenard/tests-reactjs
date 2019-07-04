import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as TodosActions } from "../../store/ducks/todos";

// import { Container } from './styles';

function TodoList() {
  const [newTodo, handleInputChange] = useState("");

  const { list } = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // const localTodos = localStorage.getItem("todos");
    // if (localTodos) {
    //   handleChangeTodos(JSON.parse(localTodos));
    // }
  }, []);

  const handleAddTodo = () => {
    dispatch(TodosActions.addTodo(newTodo));
    handleInputChange("");
    localStorage.setItem("todos", JSON.stringify(list));
  };

  return (
    <div>
      <ul>{list && list.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
      <input
        type="text"
        name="todo"
        onChange={event => handleInputChange(event.target.value)}
        value={newTodo}
      />
      <button onClick={handleAddTodo}>Adicionar</button>
    </div>
  );
}

export default TodoList;
