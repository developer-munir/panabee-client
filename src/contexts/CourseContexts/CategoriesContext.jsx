import React, { createContext, useEffect, useState } from 'react';

export const categoriesDataContext = createContext();
const CategoriesContext = ({ children }) => {
    const [categoriesData,setCategoriesData] = useState();
    useEffect(() => {
        fetch("https://assingment-ten-server.vercel.app/course-categories")
        .then(res => res.json())
        .then(data => setCategoriesData(data))
    },[])
    return (
        <categoriesDataContext.Provider value={categoriesData}>
            {children}
        </categoriesDataContext.Provider>
    );
};

export default CategoriesContext;