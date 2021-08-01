import {
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  SAVE_COURSE_SUCCESS,
} from "./actionType";
import * as courseApi from "../../api/courseApi";

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
export const loadCourses = () => {
  return (dispatch) => {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const saveCourse = (course) => {
  return (dispatch) => {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(saveCourseSucess(savedCourse))
          : dispatch(createCourseSucess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
};
