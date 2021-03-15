import React from "react";
import ItemComment from "../itemComment";
import "./listComments.css";

const ListComments = (props) => {
  const { comments, removeComment } = props;

  return (
    <div>
      <h2 className="subtitle">List of comments:</h2>
      <ul className="todo-list">
        {comments.length ? (
          comments.map(({ id, name, text, date }) => (
            <ItemComment
              removeComment={removeComment}
              key={id}
              id={id}
              name={name}
              text={text}
              date={date}
            />
          ))
        ) : (
          <p className="emptyCommenstList">
            Here are no comments. Write the first comment.
          </p>
        )}
      </ul>
    </div>
  );
};

export default ListComments;
