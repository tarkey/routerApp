import {
  CREATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC,
  LOAD_COURSES_SUCCESS,
  SAVE_COURSE_SUCCESS,
} from "../actions/actionType";
import initialState from "../reducers/initialState";

const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case SAVE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
};

export default courseReducer;
