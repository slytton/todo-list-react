export default function apiReducer(state={
  fetching:false,
  fetched: false,
  links: {},
  errors: []
}, action) {
  console.log(`In API reducer` );
  switch (action.type) {
    case "FETCH_API_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_API_FULFILLED": {
      return {...state, fetching: false, fetched: true, links: action.payload.data.links}
    }
  }
  return {...state};
}
