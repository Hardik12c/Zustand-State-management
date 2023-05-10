import React, { useState } from "react";
import usecourseStore from "../app/courseStore";

export default function Courseform() {
  const addCourse = usecourseStore((state) => state.addCourse);
  const [courseTitle, setcourseTitle] = useState("");
  const handlecoursesubmit = () => {
    if (!courseTitle) return alert("please add a course title");
    addCourse({
      id: Math.ceil(Math.random * 100000),
      title: courseTitle,
    });
    setcourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setcourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handlecoursesubmit();
        }}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
}
