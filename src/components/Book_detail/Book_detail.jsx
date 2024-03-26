import {useLoaderData} from "react-router-dom";
import { Link } from "react-router-dom";
import { setBook } from "../../Utility/LocalStorage";

const Book_detail = () => {
    const book = useLoaderData();
    const {bookId,bookName,category,author,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book;
    const handleRead = ID =>{
        setBook(ID,'Read-List');
    }  
    const handleWishlist = ID =>{
        setBook(ID,'Wish-List');
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="bg-[#1313130D] p-8 flex justify-center items-center">
                <img src={image}
                className="w-[250px]"
                 alt="" />
            </div>
           <div className="ms-8">
           <div className="">
           <h1 className="font-bold text-4xl py-2">{bookName}</h1>
            <p className="py-2">By <span className="text-[#131313CC] font-medium">{author}</span> </p>
            <p className="text-[#131313CC] font-medium border-y-2 py-2">{category}</p>
            <p className="py-2"><span className="font-bold">Review: </span><span>{review}</span></p>
            <div className="flex items-center border-b-2 py-2">
            <span className="font-bold">Tag</span>
            <div className="text-center p-2 flex">
            {tags.map((tag, idx) => (
              <p className="text-[#23BE0A] bg-[#23BE0A0D] m-2 rounded-lg p-2" key={idx}>
               # <span>{tag}</span>
              </p>
            ))}
            </div>
            </div>
            <div>
                <table>
                    <tr>
                        <td><span>Number of Page :</span></td>
                        <td><span className="text-[#131313] font-semibold">{totalPages}</span></td>
                    </tr>
                    <tr>
                        <td><span>Publisher :</span></td>
                        <td><span className="text-[#131313] font-semibold">{publisher}</span></td>
                    </tr>
                    <tr>
                        <td>Year of Publishing:</td>
                        <td><span className="text-[#131313] font-semibold">{yearOfPublishing}</span></td>
                    </tr>
                    <tr>
                        <td><span>Rating:</span></td>
                        <td><span className="text-[#131313] font-semibold">{rating}</span></td>
                    </tr>
                </table>
            </div>
            <div className="mt-2">
                <Link onClick={()=>handleRead(bookId)} className="mx-2"><button className="btn bg-white">Read</button></Link>
                <Link onClick={()=>handleWishlist(bookId)} className="mx-2"><button className="btn bg-[#50B1C9] text-white">Wishlist</button></Link>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Book_detail;