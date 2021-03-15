import { ADD_COMMENT, REMOVE_COMMENT } from "../constants";
import GetDate from "../../components/getDate";

const initialState = [
  {
    id: 1,
    name: "Iron Man",
    text: "Yeah it is.",
    date: GetDate(),
  },
  {
    id: 2,
    name: "Professor Hulk",
    text: "No, man! React and Redux is realy cool!",
    date: GetDate(),
  },
  {
    id: 3,
    name: "Peter Parker",
    text: "React and Redux is too hard :(",
    date: GetDate(),
  },
];

const comments = (state = initialState, { id, name, text, date, type }) => {
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          id,
          name,
          text,
          date,
        },
      ];
    case REMOVE_COMMENT:
      return [...state].filter((comment) => comment.id !== id);
    default:
      return state;
  }
};

export default comments;
