import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
import { expect, it } from "@jest/globals";
import initialState from "./initialState";

it("adding a course in CREATE_COURSE_SUCCESS", () => {
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];
  const newCourse = {
    title: "C",
  };

  const action = actions.createCourseSucess(newCourse);
  const newState = courseReducer(initialState, action);
  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe("A");
  expect(newState[1].title).toBe("B");
  expect(newState[2].title).toBe("C");
});
