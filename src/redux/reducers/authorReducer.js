import { CREATE_COURSE, LOAD_AUTHORS_SUCESS } from "../actions/actionType";
const courseReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_AUTHORS_SUCESS:
      return action.authors;
    default:
      return state;
  }
};

export default courseReducer;
