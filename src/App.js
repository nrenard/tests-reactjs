import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TodosList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world</h1>

        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
