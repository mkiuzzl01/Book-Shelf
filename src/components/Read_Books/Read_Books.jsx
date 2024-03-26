import { useEffect, useState } from "react";
import { getBooks } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Read_Book from "../Read_Book/Read_Book";
const Read_Books = () => {
    const Books = useLoaderData();
    const [Read,setRead] = useState([]);

    
    useEffect(()=>{
        const ReadBook = getBooks('Read-List');
        if(ReadBook.length>0){
            const Read = Books.filter(Book => ReadBook.includes(Book.bookId));
            setRead(Read)
        }
    },[Books])

  return (
        <div>
        {
            Read.map(read=> <Read_Book key={read.bookId} read={read}></Read_Book>)
        }
      </div>
  );
};

export default Read_Books;
