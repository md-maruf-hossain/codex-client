import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assests/Business_SVG.svg";

const Header = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="font-bold">
              <span className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl">
                Welcome To <span className="text-emerald-600">Codex</span>
              </span>
              <br />
              <span className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl">Learning Application</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Hand-picked Instructor and expertly crafted courses, designed for the modern students and programmers.</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link rel="noopener noreferrer" to="/courses" className="px-8 py-3 text-lg font-semibold rounded bg-emerald-600 text-gray-50">
                Browse Courses
              </Link>
              <Link rel="noopener noreferrer" to="/blog" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:bg-emerald-600 hover:text-white">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={cover} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
