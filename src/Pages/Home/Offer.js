import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="p-6 py-12 bg-emerald-600 text-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to 40% Off
          </h2>
          <h2 className="space-x-2 text-center py-2 lg:py-0">
            <span>Use code:</span>
            <span className="font-bold text-lg">codex07</span>
          </h2>
          <Link to="/courses" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
