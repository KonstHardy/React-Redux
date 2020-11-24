import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapDispatch';

import './app.css';
import AddToDo from '../components/add-todo/add-todo';
import ToDoList from '../components/todo-list/todo-list';

let App = (props) => {
  const { todos, addTask, removeTask } = props;

  return (
    <div className="todo-wrapper">
      <h1 className="title">Comment App (React + Redux)</h1>
      <AddToDo addTask={addTask} />
      <ToDoList todos={todos} removeTask={removeTask} />
    </div>
  );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
