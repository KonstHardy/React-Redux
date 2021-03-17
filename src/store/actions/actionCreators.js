import { ADD_COMMENT, REMOVE_COMMENT } from "../constants";
import GetDate from "../../components/getDate";

export const addComment = (name, text) => ({
  type: ADD_COMMENT,
  id: Date.now().toString(),
  name,
  text,
  date: GetDate(),
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id,
});
