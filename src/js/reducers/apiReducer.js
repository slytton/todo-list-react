import Immutable from 'immutable';

export default function apiReducer(state=Immutable.fromJS({
  fetching:false,
  fetched: false,
  links: {},
  errors: []
}), action) {
  console.log(`In API reducer`);
  switch (action.type) {
    case "FETCH_API_PENDING": {
      return state.set('fetching', true);
    }
    case "FETCH_API_FULFILLED": {
      console.log("in FETCH_API_FULFILLED");
      return state.withMutations((state) => {
        console.log(state);
        state.set("fetching", false);
        state.set("fetched", true);
        state.set("links",Immutable.fromJS(action.payload.data.links));
      })
    }
  }
  return state;
}
