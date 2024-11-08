import React from 'react';
import bookImg from '../../img/kindpng_7318921.png'
const Banner = () => {
    return (
        <div className="hero bg-[#1313130D] rounded-3xl  mt-12 p-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img 
            src={bookImg}
            className="w-80 rounded-lg " />
          <div className='space-y-12'>
            <h1 className="text-6xl text-[#131313] font-bold w-full">Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;