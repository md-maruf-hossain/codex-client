import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl font-bold text-black text-center m-10">
        This {courses.name} has {courses.length} tutorials
      </h2>
      <div className="grid gap-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center p-10">
        {courses.map((course) => (
          <CategoriesCard key={course._id} course={course}></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
