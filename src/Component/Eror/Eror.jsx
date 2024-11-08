import React from 'react';
import eror from '../../img/404.jpg'
const Eror = () => {
    return (
        <div className='flex flex-col  justify-center items-center'>
            <img src={eror} alt="" />
            <h4 className='text-5xl'>Page is not found</h4>
        </div>
    );
};

export default Eror;