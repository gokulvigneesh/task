import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchTodos, addTodo, editTodo, deleteTodo } from './store';
import './todo.css'; // Import custom CSS file

const TodoList = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [showEditSuccessMessage, setShowEditSuccessMessage] = useState(false);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const response = await axios.get('https://643f75b8b9e6d064bef62a74.mockapi.io/user/');
        dispatch(fetchTodos(response.data));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodoData();
  }, [dispatch]);

  const handleAddTodo = async () => {
    setIsLoading(true);

    const newTodo = {
      title: newTodoTitle,
      completed: false,
    };

    try {
      const response = await axios.post('https://643f75b8b9e6d064bef62a74.mockapi.io/user/', newTodo);
      dispatch(addTodo(response.data));
      setNewTodoTitle('');
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Error adding todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditTodo = async (id, updatedTodo) => {
    setIsLoading(true);

    try {
      await axios.put(`https://643f75b8b9e6d064bef62a74.mockapi.io/user/${id}`, updatedTodo);
      dispatch(editTodo(id, updatedTodo));
      setShowEditSuccessMessage(true);
    } catch (error) {
      console.error('Error editing todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteConfirmation = (todo) => {
    setTodoToDelete(todo);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteTodo = async () => {
    setShowDeleteConfirmation(false);

    if (!todoToDelete) {
      return;
    }

    try {
      await axios.delete(`https://643f75b8b9e6d064bef62a74.mockapi.io/user/${todoToDelete.id}`);
      dispatch(deleteTodo(todoToDelete.id));
      setTodoToDelete(null);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setTodoToDelete(null);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        className="todo-input"
        placeholder="Enter a new todo..."
      />
      <button onClick={handleAddTodo} className="add-button">Add </button>
      <div className="card-list">
        {todos.map((todo) => (
          <div key={todo.id} className="card">
            
            <input
              type="text"
              value={todo.title}
              onChange={(e) =>
                handleEditTodo(todo.id, { ...todo, title: e.target.value })
              }
              className="todo-input"
            />
            <button onClick={() => handleDeleteConfirmation(todo)} className="delete-button">Delete</button>
            <button onClick={() => handleEditTodo(todo.id, todo)} className="edit-button">Edit</button>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="loading-icon">
          <span className="spinner" />
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-popup">
          <span className="message">Action successful!</span>
          <button onClick={() => setShowSuccessMessage(false)} className="close-button">OK</button>
        </div>
      )}
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <span className="message">Are you sure you want to delete this todo?</span>
          <button onClick={handleDeleteTodo} className="confirm-button">OK</button>
          <button onClick={handleCancelDelete} className="cancel-button">Cancel</button>
        </div>
      )}
      {showEditSuccessMessage && (
        <div className="success-popup">
          <span className="message">Todo updated successfully!</span>
          <button onClick={() => setShowEditSuccessMessage(false)} className="close-button">OK</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
