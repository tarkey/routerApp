import React from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class ManagedCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
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
  }
  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}
ManagedCoursePage.propType = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    authors: state.authors,
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);
