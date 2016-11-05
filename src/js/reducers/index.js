import { combineReducers } from "redux-immutable"

import lists from "./listsReducer"
import api from "./apiReducer"

export default combineReducers({
  api,
  lists
})
