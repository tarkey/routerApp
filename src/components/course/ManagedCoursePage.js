import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManagedCoursePage = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading Courses failed" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading Courses failed" + error);
      });
    }
  }, []);

  return (
    <>
      <CourseForm course={course} errors={errors} authors={authors} />
    </>
  );
};
ManagedCoursePage.propType = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    authors: state.authors,
    course: newCourse,
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);
