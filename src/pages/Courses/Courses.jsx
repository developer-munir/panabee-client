import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { categoriesDataContext } from "../../contexts/CourseContexts/CategoriesContext";
import "./courses.css";
import CoursesDetails from "./CoursesDetails";

const Courses = () => {
  const categoriesData = useContext(categoriesDataContext);
  const courseData = useLoaderData();
  const [categoriesName, setCategoriesName] = useState("All Courses");
  console.log(courseData);
  const handleClickableName = (e) => {
    setCategoriesName(e.target.innerText);
  };
  return (
    <div className="courses-container min-h-[100vh]">
      <div className="bg-[#5A20CB] text-[#CAD5E2]">
        <Link to="/categories/all" onClick={handleClickableName}>
          <h1 className="ml-3 mt-2">All Courses</h1>
        </Link>
        {categoriesData?.map((data) => (
          <div className="mt-3 ml-3" key={data?.id}>
            <Link to={`/categories/${data?.id}`} onClick={handleClickableName}>
              <span>{data?.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-[#CAD5E2]">
        <CoursesDetails
          courseData={courseData}
          categoriesName={categoriesName}
        ></CoursesDetails>
      </div>
    </div>
  );
};

export default Courses;
