import React, { useContext } from 'react';
import { categoriesDataContext } from '../../contexts/CourseContexts/CategoriesContext';

const Courses = () => {
    const categoriesData = useContext(categoriesDataContext);
    console.log(categoriesData);
    return (
        <div>
            <h1>Courses</h1>
        </div>
    );
};

export default Courses;