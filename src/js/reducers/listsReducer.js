export default function listsReducer(state={
    lists: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    // Clear errors.
    // if(action.type.includes("LISTS"))
    switch (action.type) {
      case "FETCH_LISTS_PENDING": {
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
      case "ADD_LIST_PENDING": {
        // return {
        //   ...state,
        //   lists: [...state.lists.lists, action.payload],
        // }
      }
      case "ADD_LIST_REJECTED": {
        return {
          ...state,
          // lists: {...state.lists, errors: action.payload.data.data.errors},
        }
      }
      case "ADD_LIST_FULFILLED": {
        state = {
          ...state,
          lists: [...state.lists, action.payload.data.data]
        }

        return state;
      }

      // case "DELETE_LIST_PENDING": {
      //   let newLists = [...state.lists];
      //   for(var i = 0; i < newLists; i++){
      //     let list = state.lists[i];
      //     if(list.id === action.listId){
      //       {...list, deleting: true}
      //     }
      //   }
      //   return {
      //     ...state,
      //
      //   };
      // }
      //
      // case "DELETE_LIST_REJECTED": {
      //   // let updatedList = null;
      //   // for(let i = 0; i < state.lists.length; i++){
      //   //   if(state.lists[i].id = action.listId){
      //   //     updatedList = state.lists[i];
      //   //     break;
      //   //   }
      //   // }
      //   // if(updatedList !== null){
      //   //   updatedList = {...updatedList, deleting: false};
      //   //   state.lists.splice(i, 1, updatedList);
      //   // }
      //   //
      //   // state = {
      //   //   ...state
      //   // }
      // }

      case "DELETE_LIST_FULFILLED": {
        console.log("***************", action.payload);
        let lists = state.lists
        let newLists = [...lists]
        let deletedList = action.payload.data.data;
        for(let i = 0; i < lists.length; i++){
          if(lists[i].id === deletedList.id) {
            newLists.splice(i, 1);
            break;
          }
        }
        state = {
          ...state,
          lists: newLists
        }
      }
      // case "UPDATE_LIST": {
      //   const { id, text } = action.payload
      //   const newLists = [...state.lists]
      //   const listToUpdate = newLists.findIndex(list => list.id === id)
      //   newLists[listToUpdate] = action.payload;
      //
      //   return {
      //     ...state,
      //     lists: newLists,
      //   }
      // }
      // case "DELETE_LIST": {
      //   return {
      //     ...state,
      //     lists: state.lists.filter(list => list.id !== action.payload),
      //   }
      // }
    }

    return state
}
