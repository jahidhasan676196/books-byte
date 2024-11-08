import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WishListBook = () => {
    const books=useLoaderData()
    return (
        <div>

            <h1>This is wish lisrt sed {}</h1>
        </div>
    );
};

export default WishListBook;