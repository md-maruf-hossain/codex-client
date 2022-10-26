import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data));
  }, []);

  return (
    <div>
      <aside className="w-full p-6 sm:w-60 bg-gray-50 text-gray-800">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-md font-semibold tracking-widest uppercase text-gray-600">Courses Found: {courseCategories.length}</h2>
            <div>
              {courseCategories.map((courseCategory) => (
                <li key={courseCategory.id}>
                  <Link to={`/categories/${courseCategory.id}`} className="text-lg">
                    {courseCategory.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default LeftSide;
