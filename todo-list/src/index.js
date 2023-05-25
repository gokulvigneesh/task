import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store1';
import TodoList from './TodoList1';

ReactDOM.render(
<Provider store={store}>
<TodoList />
</Provider>,
document.getElementById('root')
);