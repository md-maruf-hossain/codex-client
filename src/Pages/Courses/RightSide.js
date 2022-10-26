import React, { useEffect, useState } from "react";
import RightSideCards from "./RightSideCards";

const RightSide = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <div className=" grid p-5 gap-5 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {courseCategories.map((courseCategory) => (
        <RightSideCards
          key={courseCategory.id}
          courseCategory ={courseCategory}
        ></RightSideCards>
      ))}
    </div>
  );
};

export default RightSide;
