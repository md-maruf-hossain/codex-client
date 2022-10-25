import React from "react";

const Stat = () => {
  return (
    <div>

      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="font-bold text-emerald-600 text-2xl text-center pb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-black">50+</h6>
            <p className="font-bold text-emerald-600">Teachers</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-black">1000+</h6>
            <p className="font-bold text-emerald-600">Videos</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-black">5000+</h6>
            <p className="font-bold text-emerald-600">Students</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-black">5000+</h6>
            <p className="font-bold text-emerald-600">App Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
