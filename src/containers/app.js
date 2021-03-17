import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/dispatch";

import AddComment from "../components/addComment";
import ListComments from "../components/listComments";
import "./App.css";

let App = (props) => {
  const { comments, addComment, removeComment } = props;

  return (
    <div className="wrapper">
      <h1 className="title">react-redux__comments-app</h1>
      <AddComment addComment={addComment} />
      <ListComments comments={comments} removeComment={removeComment} />
    </div>
  );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
