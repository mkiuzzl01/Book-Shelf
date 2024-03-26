import { PiStarThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Book_cart = ({ book }) => {
  const { bookId, tags, rating, category, author, bookName, image } = book;

  return (
    <Link to={`/Book_detail/${bookId}`}>
      <div className="card bg-base-100 shadow-lg border-2 p-4">
        <figure className="">
          <img src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex text-[#23BE0A] text-center">
            {tags.map((tag, idx) => (
              <p className="bg-[#23BE0A0D] mx-2 rounded-lg" key={idx}>
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <div className="border-b-2 pb-4">
            <p>By: {author}</p>
          </div>
          <div className="flex justify-between ">
            <div className="">{category}</div>
            <div className="flex items-center gap-2">
              {rating} <PiStarThin />
            </div>
          </div>
          <div className="text-center"></div>
        </div>
      </div>
    </Link>
  );
};

export default Book_cart;
