import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Books from '../Books/Books';

const Home = () => {
    const books=useLoaderData()

    return (
        <div>
            <h3>{books.length}</h3>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;