import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionType";
import initialState from "../reducers/initialState";

const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
