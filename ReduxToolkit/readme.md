# Redux ToolKit

# Installation

## 1. Redux toolkit install

```javascript
npm install react-redux
npm install @reduxjs/toolkit
```

## 2 Configure Store in APP Folder

#### 2.1 Create Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});
```

#### 2.2 Create Slice

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

// [ 1 ] initial State Create for store

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

// [ 2 ] create slice

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add Todo

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // action.payload.text
      };
      state.todos.push(todo); // state uses
    },
    // remove todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export syntex
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

#### 2.3 useDispatch for Update Value in Store

```javascript
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

// full code is below

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
```

#### 2.4 useSelector for Retrived Value From Store

```javascript
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
```

## 3 Main.jsx App Wrap With Provider

```javascript
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
