import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const ListedBook = () => {
    const [tabs,setTabs]=useState(0)
    return (
        <div>
            <div className='text-[#131313] font-bold text-3xl w-full h-24 bg-[#1313130D] my-9 rounded-2xl flex justify-center items-center'>
                Books
            </div>
            <div className="flex justify-start -mx-4 overflow-x-auto overflow-y-hidden  dark:bg-gray-100 dark:text-gray-800">
	<Link onClick={()=>setTabs(0)} rel="noopener noreferrer" to="readbook" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs===0?'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Reads Books</span>
	</Link>
	<Link onClick={()=>setTabs(1)} rel="noopener noreferrer" to="wishlist" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs===1?'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
</div>
            <Outlet></Outlet>
            <h1>isjjjjjjjjjjjjjjjjjjjjjjjjjj</h1>
        </div>
    );
};

export default ListedBook;