import Immutable from 'immutable';


export default function listsReducer(state=Immutable.Map({
    lists: Immutable.List([]),
    fetching: false,
    fetched: false,
    error: null,
  }), action) {

    // Clear errors.
    // if(action.type.includes("LISTS"))
    switch (action.type) {
      case "FETCH_LISTS_PENDING": {
        return state.set('fetching', true);
      }
      case "FETCH_LISTS_REJECTED": {
        return state.withMutations((state) => {
          state.set("fetching", false);
          state.set("error", Immutable.fromJS(action.payload.data))
          return state;
        })
      }
      case "FETCH_LISTS_FULFILLED": {
        return state.withMutations((state) => {
          state.set("fetching", false);
          state.set("fetched", true);
          state.set("lists", Immutable.fromJS(Array.from(action.payload.data.data)));
          return state;
        })
      }

      case "ADD_LIST_REJECTED": {
        return state.set('errors', action.payload.data.data.errors);
      }
      
      case "ADD_LIST_FULFILLED": {
        let newList = action.payload.data.data;
        return state.updateIn(['lists'], (list)=>list.push(newList));
      }

      case "DELETE_LIST_PENDING": {
        // let newLists = [...state.lists];
        // for(var i = 0; i < newLists; i++){
        //   let list = state.lists[i];
        //   if(list.id === action.listId){
        //     {...list, deleting: true}
        //   }
        // }
        // return {
        //   ...state,
        //
        // };
        return state;
      }
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
        let toDelete = action.payload.data.data;
        let newLists = state.get('lists').toJS().filter((list) => list.id != toDelete.id);
        return state.set("lists", Immutable.fromJS(newLists));;
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
