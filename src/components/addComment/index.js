import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../store/dispatch";
import logo from "./../../img/logo192.png";
import "./addComment.css";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputText: "",
      addComment: {
        name: "",
        text: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const text = target.text;

    this.setState({
      [name]: value,
      [text]: value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { inputName, inputText } = this.state;

    console.log(this.props);
    console.log(inputName, inputText);

    const { addComment } = this.props;
    addComment(inputName, inputText);

    this.setState({
      inputName: "",
      inputText: "",
      addComment: {
        name: "",
        text: "",
      },
    });
  };

  render() {
    return (
      <>
        <h2 className="subtitle">Your comment:</h2>
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__comment">
              <input
                className="form__inputName"
                required
                placeholder="Enter your name"
                type="text"
                name="inputName"
                value={this.state.inputName}
                onChange={this.handleChange}
              ></input>
              <button className="btn__submit" type="submit">
                Add comment
              </button>
            </div>
            <textarea
              className="form__inputText"
              required
              placeholder="Enter your comment"
              type="text"
              name="inputText"
              value={this.state.inputText}
              onChange={this.handleChange}
            ></textarea>
          </form>
          <img className="img__react" src={logo} alt="React logo" />
        </div>
      </>
    );
  }
}

AddComment = connect(mapStateToProps, mapDispatchToProps)(AddComment);

export default AddComment;
