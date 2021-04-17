import { ADD_COMMENT, REMOVE_COMMENT } from "../constants";
import GetDate from "../../components/getDate";

const initialState = [
  {
    id: 1,
    name: "Clark Kent",
    text: "Redux is mostly used as a state management tool for your app.",
    date: GetDate(),
  },
  {
    id: 2,
    name: "Bruce Wayne",
    text: "Redux helps you deal with application state management.",
    date: GetDate(),
  },
  {
    id: 3,
    name: "Aquaman",
    text: "So why do I need Redux?",
    date: GetDate(),
  },
];

let savedComments;

try {
  savedComments =
    JSON.parse(localStorage.getItem("reduxState")) || initialState;
} catch (error) {
  savedComments = [];
  localStorage.removeItem("reduxState");
}

const comments = (state = savedComments, { id, name, text, date, type }) => {
  switch (type) {
    case ADD_COMMENT:
      return [
        {
          id,
          name,
          text,
          date,
        },
        ...state,
      ];
    case REMOVE_COMMENT:
      return [...state].filter((comment) => comment.id !== id);
    default:
      return state;
  }
};

export default comments;
