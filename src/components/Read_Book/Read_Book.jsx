import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import PropTypes from 'prop-types';

const Read_Book = ({ read }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = read;
  return (
    <div className="border-2 my-4 rounded-lg">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-white text-black">
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center justify-center lg:flex-row w-full space-x-2 sm:space-x-4 ">
              <div className="bg-[#1313130D] p-6 rounded-lg">
                <img
                  className="w-50 bg-[#1313130D]"
                  src={image}
                  alt={bookName}
                />
              </div>
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {bookName}
                    </h3>
                    <p className="text-sm">By {author}</p>
                    <div>
                      <div className="flex justify-center items-center">
                        <div className="text-center flex">
                          {tags.map((tag, idx) => (
                            <p
                              className="text-[#23BE0A] bg-[#23BE0A0D] m-2 rounded-lg"
                              key={idx}
                            >
                              # <span>{tag}</span>
                            </p>
                          ))}
                        </div>
                        <div>
                          <p className="text-gray-600">
                            <span >Year of Publishing:</span> {yearOfPublishing}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-4 text-gray-400 mb-2 border-b-2">
                        <p className="flex items-center">
                        <IoPeopleOutline className="text-lg mx-1" />Publisher:<span>{publisher}</span>
                        </p>
                        <p className="flex items-center">
                        <MdOutlineFindInPage className="text-lg mx-1" /> Page:<span>{totalPages}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <p className=" bg-[#328EFF26] text-[#328EFF] p-1 rounded-lg">
                        <span>Category:</span> {category}
                      </p>
                      <p className="bg-[#FFAC3326] text-[#FFAC33] p-1 rounded-lg">
                        <span>Rating:</span> {rating}
                      </p>
                     <Link to={`/Book_detail/${bookId}`} className="text-white bg-[#23BE0A] p-1 rounded-lg"><button>
                        View Details
                      </button></Link>
                    </div>
                  </div>
                </div>
                <div className="flex text-sm divide-x"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
Read_Book.propTypes = {
  read:PropTypes.object,
}
export default Read_Book;
