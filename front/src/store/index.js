import { createStore, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);
