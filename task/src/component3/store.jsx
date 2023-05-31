// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Action types
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const FETCH_TODOS = 'FETCH_TODOS';

// Action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (id, todo) => ({
  type: EDIT_TODO,
  payload: { id, todo },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const fetchTodos = (todos) => ({
  type: FETCH_TODOS,
  payload: todos,
});

// Reducer
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload.todo : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
