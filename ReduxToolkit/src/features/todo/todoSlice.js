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

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
