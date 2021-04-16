import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/dispatch";

import logo from "./../img/logo512.png";
import AddComment from "../components/addComment";
import ListComments from "../components/listComments";
import "./app.css";

let App = (props) => {
  const { comments, addComment, removeComment } = props;

  return (
    <div className="wrapper">
      <h1 className="title">react-redux__comments-app</h1>
      <img className="img__react" src={logo} alt="React logo" />
      <AddComment addComment={addComment} />
      <ListComments comments={comments} removeComment={removeComment} />
    </div>
  );
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
