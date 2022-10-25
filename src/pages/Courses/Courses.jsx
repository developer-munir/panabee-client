import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { categoriesDataContext } from "../../contexts/CourseContexts/CategoriesContext";
import Card from "../Shared/Card";
import "./courses.css";

const Courses = () => {
  const categoriesData = useContext(categoriesDataContext);
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div className="courses-container min-h-[100vh]">
      <div className="bg-[#5A20CB] text-[#CAD5E2]">
        <Link to="/categories/all">
          <h1 className="ml-3 mt-2">All Courses</h1>
        </Link>
        {categoriesData?.map((data) => (
          <div className="mt-3 ml-3" key={data?.id}>
            <Link to={`/categories/${data?.id}`}>
              <span>{data?.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-[#CAD5E2]">
        <h1 className="text-center text-2xl py-2 font-bold">Courses</h1>
        <div className="grid md:grid-cols-2 gap-4 p-4 ">
          {courseData?.map((course) => (
            <Card key={course._id} course={course}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
