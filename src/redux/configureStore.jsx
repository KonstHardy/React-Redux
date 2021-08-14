import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import postsReducer from "./reducers/postsReducer";

export default function configureStore() {
  const rootReducer = combineReducers({
    posts: postsReducer,
  });

  const composedEnhancers = composeWithDevTools();

  const store = createStore(rootReducer, composedEnhancers);

  return store;
}
