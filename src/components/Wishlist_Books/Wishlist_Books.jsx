import { useContext, useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Wish_Book from "../Wish_Book/Wish_Book";
import { Pages, Rating, Years } from "../Listed_Books/Listed_Books";

const Wishlist_Books = () => {
    const Books = useLoaderData();
    const rating = useContext(Rating);
    const year = useContext(Years);
    const page = useContext(Pages);
    const [wishs,setWish] = useState([]);
    const [ratingDisplay,setRatingDisplay] = useState([]);

    
    useEffect(()=>{
        const wishBook = getBooks('Wish-List');
        if(wishBook.length>0){
            const Wish = Books.filter(Book => wishBook.includes(Book.bookId));
            setWish(Wish);
            setRatingDisplay(Wish);
        }
    },[Books])

    if(rating){
        const info = wishs.sort(function(a,b){
            return a.rating - b.rating;
        })
        info.reverse();
    }else if(page){
        const info = wishs.sort(function(a,b){
            return a.totalPages - b.totalPages;
        })
        info.reverse();
    }else if(year){
        const info = wishs.sort(function(a,b){
            return a.yearOfPublishing - b.yearOfPublishing;
        })
        info.reverse();
    }

    return (
        <div>
        {
            ratingDisplay.map(wish=> <Wish_Book key={wish.bookId} wish={wish}></Wish_Book>)
        }
      </div>
    );
};

export default Wishlist_Books;