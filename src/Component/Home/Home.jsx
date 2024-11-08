import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Books from '../Books/Books';

const Home = () => {
    const books=useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;