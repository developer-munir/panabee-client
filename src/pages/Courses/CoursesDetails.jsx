import React from 'react';
import Card from '../Shared/Card';

const CoursesDetails = ({ courseData, categoriesName }) => {
  return (
    <div>
      <h1 className="text-center text-2xl py-2 font-bold">{categoriesName}</h1>
      <div className="grid md:grid-cols-2 gap-4 p-4 ">
        {courseData?.map((course) => (
          <Card key={course._id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesDetails;