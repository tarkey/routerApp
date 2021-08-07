import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";
import { it } from "@jest/globals";

const rederCourseForm = (args) => {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
};

it("render the text of header", () => {
  const { getByText } = rederCourseForm();
  getByText("Add Course");
});
it("label button as 'Save' when not saving", () => {
  const { getByText } = rederCourseForm();
  getByText("Save");
});
it("label button as 'Saving...' when not saving", () => {
  const { getByText } = rederCourseForm({ saving: true });
  getByText("Saving...");
});
