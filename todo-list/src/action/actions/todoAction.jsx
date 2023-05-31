
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants';

let nextTodoId = 1;

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    title,
    completed: false
  }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});
