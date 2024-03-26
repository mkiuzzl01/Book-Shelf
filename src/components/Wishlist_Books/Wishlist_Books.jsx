import { useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Wish_Book from "../Wish_Book/Wish_Book";

const Wishlist_Books = () => {
    const Books = useLoaderData();
    const [wishs,setWish] = useState([]);

    
    useEffect(()=>{
        const wishBook = getBooks('Wish-List');
        if(wishBook.length>0){
            const Wish = Books.filter(Book => wishBook.includes(Book.bookId));
            setWish(Wish)
        }
    },[Books])
    return (
        <div>
        {
            wishs.map(wish=> <Wish_Book key={wish.bookId} wish={wish}></Wish_Book>)
        }
      </div>
    );
};

export default Wishlist_Books;