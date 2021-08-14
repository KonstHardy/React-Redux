import { POST_ADD, POST_REMOVE } from "../constants/postsConstants";

import getDate from "../../utils/getDate";
import saveToLocalStorage from "../../utils/saveToLocalStorage";

const initialState = [
  {
    id: 1,
    title: "Clark Kent",
    description:
      "Redux is mostly used as a state management tool for your app.",
    date: getDate(),
  },
  {
    id: 2,
    title: "Bruce Wayne",
    description: "Redux helps you deal with application state management.",
    date: getDate(),
  },
  {
    id: 3,
    title: "Aquaman",
    description: "So why do I need Redux?",
    date: getDate(),
  },
];

const savedComments =
  JSON.parse(localStorage.getItem("savedPosts")) || initialState;

export default function postsReducer(state = savedComments, action) {
  let newPost;
  let updatePosts;

  switch (action.type) {
    case POST_ADD:
      newPost = {
        id: action.id,
        title: action.title,
        description: action.description,
        date: action.date,
      };
      updatePosts = [newPost, ...state];

      saveToLocalStorage(updatePosts);
      return updatePosts;

    case POST_REMOVE:
      updatePosts = state.filter((post) => post.id !== action.id);
      saveToLocalStorage(updatePosts);
      return updatePosts;

    default:
      return state;
  }
}
