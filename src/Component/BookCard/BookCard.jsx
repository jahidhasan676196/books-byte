import React from 'react';

const BookCard = ({newbook}) => {
    const {book_Id,book_name,author,image,review,total_pages,rating,category,tags,publisher,yearOf_publishing}=newbook
    return (
<div className=" border mt-8 rounded-2xl p-6 pr-72">
  <div className=" flex flex-row ">
    <div className='flex-1 '>
    <img
      src={image}
      className="rounded-lg w-3/4  " />
    </div>
    <div className='space-y-4 flex-1'>
      <h1 className="text-2xl font-bold text-[#131313]">{book_name}</h1>
      <p className='text-[#131313CC] text-base font-medium'>By:{author}</p>
      <div className='flex gap-6 text-[#131313CC] text-base font-medium'>
        <p className='text-[#131313]'>Tags</p>
        <p>#{tags[0]}</p>
        <p>#{tags[1]}</p>
        <p>Year of Publishing: {yearOf_publishing}</p>
      </div>
      <div className='flex gap-6 text-[#131313CC] text-base font-medium'>
      <p className="">{publisher}</p>
      <p>{total_pages}</p>
      </div>
      <hr />
      <div className='flex gap-5'>
        <button className='bg-[#328EFF] text-white rounded-full btn'>category:{category}</button>
        <button className='bg-[#FFAC33] text-white rounded-full btn'>rating:{rating}</button>
        <button className='bg-[#23BE0A] text-white rounded-full btn'>View Details</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookCard;