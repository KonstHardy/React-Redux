import { ADD_TASK, REMOVE_TASK } from '../constants';
import getDate from '../components/getDate';

export const addTask = (name, text, date) => ({
  type: ADD_TASK,
  id: Date.now().toString(),
  name,
  text,
  date: getDate(),
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id,
});
