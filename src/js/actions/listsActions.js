import axios from "axios";

export function fetchLists(api) {
  return {
    type: "FETCH_LISTS",
    payload: axios.get(api.links.lists)
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
