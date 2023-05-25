import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  EDIT_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from './action';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
      case ADD_TODO_SUCCESS:
      return {
      ...state,
      todos: [...state.todos, action.payload],
      };
      case EDIT_TODO_SUCCESS:
      return {
      ...state,
      todos: state.todos.map((todo) =>
      todo.id === action.payload.id ? action.payload : todo
      ),
      };
      case DELETE_TODO_SUCCESS:
      return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      default:
      return state;
      }
      };
      
      export default reducer;
