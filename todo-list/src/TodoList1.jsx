import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, editTodo, deleteTodo } from './action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';

import './TodoList.css';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [editedTodo, setEditedTodo] = useState({ id: null, title: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [deleteConfirmationId, setDeleteConfirmationId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setLoading(true);
      dispatch(addTodo(newTodo))
        .then(() => {
          setNewTodo('');
          setSuccessMessage('Added Successfully!');
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  const handleEditTodo = (todo) => {
    setEditedTodo({
      id: todo.id,
      title: todo.title,
    });
    setDeleteConfirmationId(null);
  };

  const handleUpdateTodo = () => {
    if (editedTodo.title.trim() !== '') {
      setLoading(true);
      dispatch(editTodo(editedTodo.id, { title: editedTodo.title }))
        .then(() => {
          setEditedTodo({ id: null, title: '' });
          setSuccessMessage('Updated Successfully!');
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  const handleCancelEdit = () => {
    setEditedTodo({ id: null, title: '' });
  };

  const handleDeleteTodo = (id) => {
    setDeleteConfirmationId(id);
  };

  const confirmDelete = () => {
    dispatch(deleteTodo(deleteConfirmationId))
      .then(() => {
        setDeleteConfirmationId(null);
        
      })
      .catch((error) => {
        console.error(error);
       
      });
  };

  const cancelDelete = () => {
    setDeleteConfirmationId(null);
  };

  const handleDismissSuccess = () => {
    setSuccessMessage('');
  };

  return (
    <div className="todo-container">
      <div>
        <input className="input" type="text" value={newTodo} onChange={handleInputChange} />
        <button className="inputbutn" onClick={handleAddTodo}>
          ADD
        </button>
      </div>
      <div className="card-list">
        {todos.map((todo) => (
          <div className="card" key={todo.id}>
            <div className="card-content">
              {todo.id === editedTodo.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTodo.title}
                    onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
                  />
                  <button onClick={handleUpdateTodo}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <span>{todo.title}</span>
                  <div className="card-buttons">
                    <button onClick={() => handleEditTodo(todo)}>Edit</button>
                  </div>
                  <button className="closebutn" onClick={() => handleDeleteTodo(todo.id)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="popup">
          <div className="popup-content">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        </div>
      )}
      {successMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{successMessage}</p>
            <button onClick={handleDismissSuccess}>OK</button>
          </div>
        </div>
      )}
      {deleteConfirmationId && (
        <div className="popup">
          <div className="popup-content1">
            <p>Are you sure you want to delete?</p>
            <button className="butn1" onClick={confirmDelete}>
              OK
            </button>
            <button className="butn2" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
