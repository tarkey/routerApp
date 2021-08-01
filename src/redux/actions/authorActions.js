import { CREATE_COURSE, LOAD_AUTHORS_SUCESS } from "./actionType";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "../actions/apiStatusActions";

export const createCourse = (course) => {
  return {
    type: CREATE_COURSE,
    course,
  };
};

export const loadAuthorsSuccess = (authors) => {
  return {
    type: LOAD_AUTHORS_SUCESS,
    authors,
  };
};
export const loadAuthors = () => {
  return (dispatch) => {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
};
