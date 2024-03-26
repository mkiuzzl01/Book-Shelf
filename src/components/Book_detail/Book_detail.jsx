import {useLoaderData} from "react-router-dom";

const Book_detail = () => {
    const book = useLoaderData();
    const {bookName,category,author,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book;    
    return (
        <div className="flex justify-between">
            <div>
                <img src={image} alt="" />
            </div>
           <div>
           <div className="border-b-2">
           <h1 className="font-bold text-4xl">{bookName}</h1>
            <p>By <span>{author}</span> </p>
            <p>{category}</p>
            <p><span className="font-bold">Review: </span><span>{review}</span></p>
            {tags.map((tag, idx) => (
              <p className="text-[#23BE0A] bg-[#23BE0A0D] m-2" key={idx}>
               # <span>{tag}</span>
              </p>
            ))}
            <div>
                <h3>Number of Page :{totalPages}</h3>
                <h3>Publisher :{publisher}</h3>
                <h3>Year of Publishing: {yearOfPublishing}</h3>
                <p>Rating: {rating}</p>
            </div>
            <div className="">
                <button className="btn">Read</button>
                <button className="btn">Wishlist</button>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Book_detail;