import { LOAD_AUTHORS_SUCESS } from "../actions/actionType";
import initialState from "../reducers/initialState";

const courseReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case LOAD_AUTHORS_SUCESS:
      return action.authors;
    default:
      return state;
  }
};

export default courseReducer;
