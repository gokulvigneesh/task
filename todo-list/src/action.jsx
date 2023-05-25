import axios from 'axios';

const API_BASE_URL = 'https://64632a4b7a9eead6fadece2b.mockapi.io/tododata';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'; 

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

export const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

export const editTodoSuccess = (todo) => ({ 
  type: EDIT_TODO_SUCCESS,
  payload: todo,
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_BASE_URL);
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTodo = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_BASE_URL, { title });
      dispatch(addTodoSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      dispatch(deleteTodoSuccess(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editTodo = (id, todo) => { 
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, todo); 
      dispatch(editTodoSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
