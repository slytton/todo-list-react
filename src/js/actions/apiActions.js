import axios from "axios";

export function fetchApi() {
  let url = (window.location.hostname == "localhost") ?
              "http://localhost:8080/api/v1" :
              "https://rails-redux-todo-app.herokuapp.com/api/v1"
  return {
    type: "FETCH_API",
    payload: axios.get(url)
  }
}
