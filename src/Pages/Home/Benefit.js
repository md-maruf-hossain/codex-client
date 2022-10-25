import React from "react";
import { Link } from "react-router-dom";

const Benefit = () => {
  return (
    <div>
      <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)" width="52" height="24" />
              </svg>
              <span className="relative text-emerald-600">Codex</span>
            </span>{" "}
          </h2>
          <p className="mb-4 text-gray-900 lg:mb-6">Hand-picked Instructor and expertly crafted courses, designed for the modern students and programmers.</p>
          <Link to="/courses" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
            <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="flex-grow pt-1">
          <div className="flex items-center mb-3">
            <span className="font-bold tracking-wide text-gray-900">Categories</span>
            <span className="ml-1">
              <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </span>
          </div>
          <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4 text-black">
            <ul className="space-y-2">
              <li>
                  Basic HTML
              </li>
              <li>
                  Advanced HTML
              </li>
              <li>
                  Basic CSS
              </li>
              <li>
                  Advanced CSS
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                  Basic Javascript
              </li>
              <li>
                  Advanced Javascript
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                  Tailwind
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                  React js
              </li>
              <li>
                  Express
              </li>
              <li>
                  Node js.
              </li>
              <li>
                  MongoDB
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                  C++
              </li>
              <li>
                  C#
              </li>
              <li>
                  Python
              </li>
              <li>
                  PHP
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </div>
    </div>
  );
};

export default Benefit;
