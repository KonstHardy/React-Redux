import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/dispatch";

import AddComment from "../components/addComment";
import ListComments from "../components/listComments";
import "./App.css";

let App = (props) => {
  const { todos, addTask, removeTask } = props;

  return (
    <div className="todo-wrapper">
      <h1 className="title">Comment App (React + Redux)</h1>
      <AddComment addTask={addTask} />
      <ListComments todos={todos} removeTask={removeTask} />
    </div>
  );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
