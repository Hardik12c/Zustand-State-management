import React from "react";
import usecourseStore from "../app/courseStore";

export default function Courselist() {
  const { courses, removeCourse, toggleCourseStatus } = usecourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses.map((course, id) => {
          return (
            <React.Fragment key={id}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>{course.title}</span>
                <button
                  className="delete btn"
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                ></button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
