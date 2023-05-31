// api.js
import axios from 'axios';

const API_BASE_URL = 'https://643f75b8b9e6d064bef62a74.mockapi.io/user';

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const saveTodo = async (todo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, todo);
    return response.data;
  } catch (error) {
    console.error('Error saving todo:', error);
    throw error;
  }
};

export const updateTodo = async (todo) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
