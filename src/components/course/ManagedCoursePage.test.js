import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManagedCoursePage } from "./ManagedCoursePage";
import { fn } from "jest-mock";
import { expect, it, jest } from "@jest/globals";

const renderManage = (args) => {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManagedCoursePage {...props} />);
  //   return mount(
  //     <Provide store={store}>
  //       <ManagedCoursePage {...props} />{" "}
  //     </Provide>
  //   );
};
it("sets error for empty title field", () => {
  const wrapper = renderManage();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
