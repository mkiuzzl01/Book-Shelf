import { useLoaderData } from "react-router-dom";
import { getBooks } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import Listed_Card from "../Listed_Card/Listed_Card";

const Listed_Books = () => {
    const Books = useLoaderData();
    const [Read,setRead] = useState([]);
    console.log(Read)
    
    useEffect(()=>{
        const ReadBook = getBooks('Read-List');
        if(ReadBook.length>0){
            const Read = Books.filter(Book => ReadBook.includes(Book.bookId));
            setRead(Read)
        }
    },[Books])

  return (
    <div>
      <h1 className="text-3xl font-bold bg-[#1313130D] p-4 text-center">Books</h1>
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn">Short By </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {
            Read.map(read=> <Listed_Card key={read.bookId} read={read}></Listed_Card>)
        }
      </div>
    </div>
  );
};

export default Listed_Books;
