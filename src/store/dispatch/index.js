import { addTask, removeTask } from "../actions/actionCreators";

export const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (name, text) => dispatch(addTask(name, text)),
    removeTask: (id) => dispatch(removeTask(id)),
  };
};
