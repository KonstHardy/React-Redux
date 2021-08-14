import { POST_ADD, POST_REMOVE } from "../constants/postsConstants";

import getDate from "../../utils/getDate";

export const postAdd = ({ title, description }) => ({
  type: POST_ADD,
  id: Date.now(),
  title,
  description,
  date: getDate(),
});

export const postRemove = (id) => ({
  type: POST_REMOVE,
  id,
});
