export default function listsReducer(state={
    lists: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    console.log(action.type);
    switch (action.type) {
      case "FETCH_LISTS": {
        return {...state, fetching: true}
      }
      case "FETCH_LISTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_LISTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          lists: Array.from(action.payload.data.data),
        }
      }
      case "ADD_LIST": {
        return {
          ...state,
          lists: [...state.lists, action.payload],
        }
      }
      case "UPDATE_LIST": {
        const { id, text } = action.payload
        const newLists = [...state.lists]
        const listToUpdate = newLists.findIndex(list => list.id === id)
        newLists[listToUpdate] = action.payload;

        return {
          ...state,
          lists: newLists,
        }
      }
      case "DELETE_LIST": {
        return {
          ...state,
          lists: state.lists.filter(list => list.id !== action.payload),
        }
      }
    }

    return state
}
