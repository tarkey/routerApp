import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionType";
const courseReducer = (state = [], action) => {
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
