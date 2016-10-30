import { combineReducers } from "redux"

import lists from "./listsReducer"
import api from "./apiReducer"

export default combineReducers({
  api,
  lists
})
