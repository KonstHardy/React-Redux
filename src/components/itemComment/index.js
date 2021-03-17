import React from "react";
import "./ItemComment.css";

const ItemComment = ({ id, name, text, date, removeComment }) => (
  <li className="comment__item">
    <div className="comment__body">
      <div className="comment__title">
        <span className="comment__author">{name}</span>
        <p className="comment__time">{date}</p>
      </div>
      <p className="comment__text">{text}</p>
    </div>

    <button className="btn__remove" onClick={() => removeComment(id)}>
      <span className="btn__line"></span>
      <span className="btn__line"></span>
    </button>
  </li>
);

export default ItemComment;
