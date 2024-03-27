import PropTypes from 'prop-types';
import Book_cart from "../Book_cart/Book_cart";
const Books = ({books}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-8">Books</h1>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 ">
                {
                    books.map(book=> <Book_cart key={book.bookId} book={book}></Book_cart>)
                }
            </div>
        </div>
    );
};
Books.propTypes ={
    books:PropTypes.array,
}
export default Books;