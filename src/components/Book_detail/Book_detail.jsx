import {useLoaderData} from "react-router-dom";
import { Link } from "react-router-dom";
import { getBooks, setBook } from "../../Utility/LocalStorage";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Book_detail = () => {
    const book = useLoaderData();
    const {bookId,bookName,category,author,image,publisher,rating,review,tags,totalPages,yearOfPublishing} = book;

    const handleRead = ID =>{
        const getReadList = getBooks('Read-List');
        if(!getReadList.includes(ID)){
            setBook(ID,'Read-List');
            setBook(ID,'Wish-List');
            toast.success("Book Added to Read List", {
                position: "bottom-center"
              });
        }else{
            toast.warn("You have Already Read This Book!", {
                position: "bottom-center"
              });
        }
        
    }  
    const handleWishlist = ID =>{
        const getWishlist = getBooks('Wish-List');
        const getReadList = getBooks('Read-List');
        if(!getWishlist.includes(ID)){
            setBook(ID,'Wish-List');
            toast.success("Book Added to Wishlist", {
                position: "bottom-center"
              });

        }else if(getReadList.includes(ID)){
            toast.warn("You have Already Read This Book", {
                position: "bottom-center"
              });
        }else{
            toast.warn("Already Added to Wishlist!", {
                position: "bottom-center"
              });
        }
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
                <Link onClick={()=>handleRead(bookId)} className="mx-2"><button className="btn bg-white text-black hover:bg-[#23BE0A] hover:text-white">Read</button></Link>
                <Link onClick={()=>handleWishlist(bookId)} className="mx-2"><button className="btn bg-[#50B1C9] text-white">Wishlist</button></Link>
                <ToastContainer />
            </div>
           </div>
           </div>
        </div>
    );
};

export default Book_detail;