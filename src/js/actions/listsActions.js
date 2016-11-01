import axios from "axios";

export default function listActions(apiUrl){

  if(!apiUrl) throw {name: "IllegalArgumentException", message: "Please pass a valid apiUrl to listsActions."};
  return {
    fetchLists,
    addList,
    deleteList
  }

  function fetchLists() {
    return {
      type: "FETCH_LISTS",
      payload: axios.get(apiUrl)
    }
  }

  function addList(list) {
    return {
      type: "ADD_LIST",
      payload: axios.post(apiUrl, list)
    }
  }

  function deleteList(listId) {
    return {
      type: "DELETE_LIST",
      payload: axios.delete(apiUrl + "/" + listId),
      listId
    }
  }
}




// export function addLists(api) {
//   return {
//     axios.post("http://localhost:8080/api/v1/lists")
//       .then((response) => {
//         dispatch({type: "FETCH_LISTS_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_LISTS_REJECTED", payload: err})
//       })
//     type: 'ADD_LIST',
//     payload: {
//       id,
//       text,
//     },
//   }
// }
//
// export function updateLists(id, text) {
//   return {
//     type: 'UPDATE_LIST',
//     payload: {
//       id,
//       text,
//     },
//   }
// }
//
// export function deleteLists(id) {
//   return { type: 'DELETE_LIST', payload: id}
// }
