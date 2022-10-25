import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { categoriesDataContext } from "../../contexts/CourseContexts/CategoriesContext";
import "./courses.css";

const Courses = () => {
  const categoriesData = useContext(categoriesDataContext);
  // const { id } = categoriesData;
  console.log(categoriesData);
  return (
    <div className="courses-container h-[100vh]">
      <div className="bg-red-200">
        <Link to='/categories/all'>
          <h1 className="ml-3">All Courses</h1>
        </Link>
        {categoriesData?.map((data) => (
          <div className="mt-3 ml-3" key={data?.id}>
            <Link to={`/categories/${data?.id}`}>
              <span>{data?.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-blue-100">
        <h1>course content</h1>
      </div>
    </div>
  );
};

export default Courses;
