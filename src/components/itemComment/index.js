import React from "react";
import "./itemComment.css";

const ItemComment = ({ id, name, text, date, removeTask }) => (
  <li className="comment__item">
    <div className="comment__body">
      <div className="comment__title">
        <span className="comment__author">{name}</span>
        <p className="comment__time">{date}</p>
      </div>
      <p className="comment__text">{text}</p>
    </div>

    <button onClick={() => removeTask(id)} className="btn__remove">
      <span className="btn__line"></span>
      <span className="btn__line"></span>
    </button>
  </li>
);

export default ItemComment;
