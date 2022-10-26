import React from "react";
import { FaEye } from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CategoriesCard = ({ course }) => {
  const { title, image_url, details, author, total_view, price, rating } = course;
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="p-8 rounded-t-lg" src={image_url} alt="product name" />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Rating: {rating.number}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-white dark:text-white">{price}$</span>
            <label htmlFor="my-modal-6" className="btn modal-button">
              Details
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <img className="p-8 rounded-t-lg" src={image_url} alt="product name" />
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{details}</p>
                <p className="py-4 font-medium">Instructor Name: {author.name}</p>
                <p className="py-4 flex items-center">
                  <FaEye className="mr-2" /> {total_view}
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Buy Now
                  </label>
                  <div ref={ref}>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                      {({ toPdf }) => (
                        <button onClick={toPdf}>
                          <label htmlFor="my-modal-6" className="btn">Download PDF</label>
                        </button>
                      )}
                    </Pdf>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
