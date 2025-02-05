import { Link, Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Rating = createContext((rating) => {
  return rating;
});
export const Pages = createContext((pages) => {
  return pages;
});
export const Years = createContext((years) => {
  return years;
});

const Listed_Books = () => {
  const [index, setIndex] = useState(0);

  const [rating, setRating] = useState("");
  const [pages, setPages] = useState("");
  const [years, setYears] = useState("");

  return (
    <Years.Provider value={years}>
      <Pages.Provider value={pages}>
        <Rating.Provider value={rating}>
          <div>
            <h1 className="text-3xl font-bold bg-[#1313130D] p-4 text-center">
              Books
            </h1>
            <div className="flex justify-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-[#23BE0A] text-white"
                >
                  Short By <MdKeyboardArrowDown className="text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={() => setRating("rating")}>
                    <a>Rating</a>
                  </li>
                  <li onClick={() => setPages("pages")}>
                    <a>Number of Pages</a>
                  </li>
                  <li onClick={() => setYears("Year")}>
                    <a>Published Year</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 dark:text-gray-800">
              <Link
                to={``}
                onClick={() => setIndex(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  index === 0 ? "border border-b-0" : "border-b "
                } dark:border-gray-600 text-gray-400 dark:text-gray-600`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" className={index === 0 ? 'text-red-500':'text-black'}></path>
                </svg>
                <span>Read Books</span>
              </Link>
              <Link
                to={`Wish_list`}
                onClick={() => setIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  index === 1 ? "border border-b-0" : "border-b"
                } dark:border-gray-600 text-gray-400 dark:text-gray-600`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" className={index === 1 ? 'text-red-500':'text-black'}></path>
                </svg>
                <span>Wishlist Books</span>
              </Link>
            </div>
            <Outlet></Outlet>
          </div>
        </Rating.Provider>
      </Pages.Provider>
    </Years.Provider>
  );
};

export default Listed_Books;
