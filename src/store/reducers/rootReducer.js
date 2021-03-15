import { ADD_TASK, REMOVE_TASK } from "../constants";
import getDate from "../../components/getDate";

const initialState = [
  {
    id: 1,
    name: "Iron Man",
    text: "Yeah it is.",
    date: getDate(),
  },
  {
    id: 2,
    name: "Professor Hulk",
    text: "No, man! React and Redux is realy cool!",
    date: getDate(),
  },
  {
    id: 3,
    name: "Peter Parker",
    text: "React and Redux is too hard :(",
    date: getDate(),
  },
];

const todos = (state = initialState, { id, name, text, date, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          name,
          text,
          date,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter((todo) => todo.id !== id);
    default:
      return state;
  }
};

export default todos;
