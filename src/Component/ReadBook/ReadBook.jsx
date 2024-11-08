import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadDataFromLocalStorage } from "../Utility/Utility";
import BookCard from "../BookCard/BookCard";



const ReadBook = () => {
    const booksFromLocalStorage=getReadDataFromLocalStorage()
    const books=useLoaderData()
    const newbooks=[]
    for(const bookId of booksFromLocalStorage){
        const book=books.find(book=>book.book_Id==bookId)
        newbooks.push(book)
    }
    return (
        <div className="grid grid-cols-1 gap-8">
            {
                newbooks.map(newbook=><BookCard newbook={newbook}></BookCard>)
            }
        </div>
    );
};

export default ReadBook;