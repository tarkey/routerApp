import {
  CREATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC,
  LOAD_COURSES_SUCCESS,
  SAVE_COURSE_SUCCESS,
} from "./actionType";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "../actions/apiStatusActions";

export const loadCoursesSuccess = (courses) => {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses,
  };
};
export const saveCourseSucess = (course) => {
  return {
    type: SAVE_COURSE_SUCCESS,
    course,
  };
};
export const createCourseSucess = (course) => {
  return {
    type: CREATE_COURSE_SUCCESS,
    course,
  };
};

export const deleteCourseOptimistic = (course) => {
  return {
    type: DELETE_COURSE_OPTIMISTIC,
    course,
  };
};

export const loadCourses = () => {
  return (dispatch) => {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
};

export const saveCourse = (course) => {
  return (dispatch) => {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(saveCourseSucess(savedCourse))
          : dispatch(createCourseSucess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
};

export const deleteCourse = (course) => {
  return (dispatch) => {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
};
