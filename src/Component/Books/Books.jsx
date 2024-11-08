import Book from "../Book/Book";


const Books = ({books}) => {
    return (
        <div className="mt-24 text-center">
            <h3 className="text-[#131313] font-bold text-4xl mb-9">Books</h3>
            <div className="grid grid-cols-3 gap-6">
            {
                books.map(book=><Book key={book.book_Id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;