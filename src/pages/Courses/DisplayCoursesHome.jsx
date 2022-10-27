import React, { useContext } from "react";
import { categoriesDataContext } from "../../contexts/CourseContexts/CategoriesContext";
import CardHomePage from "../Shared/CardHomePage";

const DisplayCoursesHome = () => {
    const categoriesData = useContext(categoriesDataContext);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-2">Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 ">
        {categoriesData?.map((data) => (
          <CardHomePage data={data} key={data?.id}></CardHomePage>
        ))}
      </div>
    </div>
  );
};

export default DisplayCoursesHome;
