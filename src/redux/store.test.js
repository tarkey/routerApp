import { createStore } from "redux";
import rooReducers from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";
import rootReducer from "./reducers";
import { expect } from "@jest/globals";

it("handling create course", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean code",
  };
  const action = courseActions.createCourseSucess(course);
  store.dispatch(action);
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
