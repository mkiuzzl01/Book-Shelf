import { useContext, useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Read_Book from "../Read_Book/Read_Book";
import { Pages, Rating, Years } from "../Listed_Books/Listed_Books";

const Read_Books = () => {
    const Books = useLoaderData();
    const rating = useContext(Rating);
    const year = useContext(Years);
    const page = useContext(Pages);
    const [Read,setRead] = useState([]);
    const [ratingDisplay,setRatingDisplay] = useState([]);
    
    useEffect(()=>{
        const ReadBook = getBooks('Read-List');
        if(ReadBook.length>0){
            const Read = Books.filter(Book => ReadBook.includes(Book.bookId));
            setRead(Read);
            setRatingDisplay(Read)
        }
    },[Books])

    if(rating){
        const info = Read.sort(function(a,b){
            return a.rating - b.rating;
        })
        info.reverse();
    }else if(page){
        const info = Read.sort(function(a,b){
            return a.totalPages - b.totalPages;
        })
        info.reverse();
    }else if(year){
        const info = Read.sort(function(a,b){
            return a.yearOfPublishing - b.yearOfPublishing;
        })
        info.reverse();
    }

  return (
        <div>
        {
            ratingDisplay.map(read=> <Read_Book key={read.bookId} read={read}></Read_Book>)
        }
      </div>
  );
};

export default Read_Books;
