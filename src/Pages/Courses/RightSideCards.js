import React from "react";
import { Link } from "react-router-dom";

const RightSideCards = ({ courseCategory }) => {
  const { name, thumbnail, id } = courseCategory;

  return (
    <div className="">
      <div className="max-w-xs rounded-md shadow-lg bg-slate-200 text-gray-100">
        <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl text-black font-semibold tracking-wide">{name}</h2>
          </div>
          <Link to={`/categories/${id}`}>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-600 text-slate-200">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideCards;
