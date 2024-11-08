import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveReadDataFromLocalStorage, saveWishListDataLocalStorage } from '../Utility/Utility';

const BookDetails = () => {
    const books=useLoaderData()
    const {id}=useParams()
const book=books.find(book=>book.book_Id==id)
const {book_Id,image,book_name,author,tags,category,rating,review,yearOf_publishing,publisher,total_pages}=book;



const handleReadData=()=>{
  saveReadDataFromLocalStorage(book_Id)
}
const handleWishListData=()=>{
  saveWishListDataLocalStorage(book_Id)
}
    
    return (
        <div className="hero bg-white   mt-12 mb-32 space-y-4">
        <div className="hero-content flex-col lg:flex-row gap-12">
            <div className='flex-1'>
            <img
            src={image}
            className=" rounded-lg " />
            </div>
          <div className='flex-1 mt-0 space-y-2'>
            <h1 className="text-4xl font-bold text-[#131313]">{book_name}</h1>
            <p className='text-[#131313CC] text-xl font-medium'>By: {author}</p>
            <hr />
            <p className='text-[#131313CC] text-xl font-medium'>{category}</p>
            <hr />
            <p className="text-base font-medium text-[#131313B2]"><span className='text-[#131313]'>Review:</span>{review}</p>
            <div className='flex gap-5 text-[#23BE0A] font-medium text-base'>
                <p className='text-[#131313]'>Tag</p>
                <p>#{tags[0]}</p>
                <p>#{tags[1]}</p>
            </div>
            <hr />
            <div className='space-y-2 text-[#131313B2] text-base font-semibold'>
            <p>Number of Pages: <span className='text-[#131313]'>{total_pages}</span></p>
            <p>Publisher: <span className='text-[#131313]'>{publisher}</span></p>
            <p>Year of Publishing: <span className='text-[#131313]'>{yearOf_publishing}</span></p>
            <p>Rating: <span className='text-[#131313]'>{rating}</span></p>
            </div>
            <div className='flex gap-4'>
                <button onClick={handleReadData} className='btn border text-black'>Read</button>
                <button onClick={handleWishListData} className='btn border bg-[#50B1C9] text-white'>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;