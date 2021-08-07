import * as courseActions from "./courseActions";
import * as types from "./actionType";
import { course, courses } from "../../../tools/mockData";
import { describe } from "yargs";
import { afterEach, expect, it } from "@jest/globals";

import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import mockStore from "redux-mock-store";

const middleware = [thunk];
const storeMock = mockStore(middleware);

describe("createCourseSucces: Testing Actions", () => {
  it("create a CREATE_COURSE_ACTION_SUCCESS", () => {
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course,
    };

    const actionCreated = courseActions.createCourseSucess(course);
    expect(expectedAction).toBe(actionCreated);
  });
});

describe("Async Action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  describe("Thunk Load Course", () => {
    it("Load Courses api call", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });
      const expectedAction = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses },
      ];

      const store = storeMock({ courses: {} });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toBe(expectedAction);
      });
    });
  });
});
