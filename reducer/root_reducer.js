import { combineReducers } from "redux";
import user_reducer from "./user_reducer";
import will_reducer from "./will_reducer";

export default combineReducers({user: user_reducer, will: will_reducer});