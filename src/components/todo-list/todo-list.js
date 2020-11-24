import React from 'react';
import './todo-list.css';
import ToDoItem from '../todo-item/todo-item';

const ToDoList = (props) => {
  const { todos, removeTask } = props;

  return (
    <div>
      <h2 className="subtitle">List of comments:</h2>
      <ul className="todo-list">
        {todos.length ? (
          todos.map(({ id, name, text, date }) => (
            <ToDoItem
              removeTask={removeTask}
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

export default ToDoList;
