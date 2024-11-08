import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ListedBook = () => {
    return (
        <div>
            <div className='text-[#131313] font-bold text-3xl w-full h-24 bg-[#1313130D] my-9 rounded-2xl flex justify-center items-center'>
                Books
            </div>
            <div className='border-b'>
               <Link to="readbook"><button className='border p-4'>Read Books</button></Link>
                <Link to="wishlist"><button className='border p-4'>Wishlist Books</button></Link>
            </div>
            <Outlet></Outlet>
            <h1>isjjjjjjjjjjjjjjjjjjjjjjjjjj</h1>
        </div>
    );
};

export default ListedBook;