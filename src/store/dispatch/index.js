import { addComment, removeComment } from "../actions/actionCreators";

export const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, text) => dispatch(addComment(name, text)),
    removeComment: (id) => dispatch(removeComment(id)),
  };
};
