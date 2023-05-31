import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./task";
import NavBar1 from "./component1/tailwind.jsx";
import Website from "./component4/component4/task1";
import Form from "./component2/form"
import TodoList from "./component3/TodoList"
import store from './component3/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/component1/tailwind" element={<NavBar1 />} />
        <Route path="/component4/task1" element={<Website />} />
        <Route path="/component2/form" element={<Form />} />
        <Route path="/component3/TodoList" element={<Provider store={store}>
      <TodoList />
    </Provider>} />
      </Routes>
    </>
  );
};

export default App;
