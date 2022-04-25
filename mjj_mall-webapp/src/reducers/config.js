import { combineReducers } from "redux";
import counter from './module/counterModule';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;