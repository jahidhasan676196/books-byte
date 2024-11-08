import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import { getWishListLocalStorageData } from "../Utility/Utility";


const WishListBook = () => {
    const books=useLoaderData()
    const wishBookDatas=getWishListLocalStorageData()
    const newbooks=[]
    for(const wishlistId of wishBookDatas){
        const book=books.find(book=>book.book_Id==wishlistId)
        newbooks.push(book)
    }

    return (
        <div>
            {
                newbooks.map(newbook=><BookCard newbook={newbook}></BookCard>)
            }
        </div>
    );
};

export default WishListBook;