import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

const rederCourseForm = (args) => {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onchange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
};

it("render form and header", () => {
  const wrapper = rederCourseForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("Save button label Save when not saving", () => {
  const wrapper = rederCourseForm();
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("button").text()).toEqual("Save");
});

it("Save button label Save when  saving", () => {
  const wrapper = rederCourseForm({ saving: true });
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("button").text()).toEqual("Saving...");
});
