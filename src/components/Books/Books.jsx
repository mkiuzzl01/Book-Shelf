import { useEffect, useState } from "react";
import Book_cart from "../Book_cart/Book_cart";

const Books = () => {
    const [books,setBooks] = useState([]);
    console.log(books)
    useEffect(()=>{
        fetch('/public/Books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-8">Books</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book=> <Book_cart key={book.bookId} book={book}></Book_cart>)
                }
            </div>
        </div>
    );
};

export default Books;