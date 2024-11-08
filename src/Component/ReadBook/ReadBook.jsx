import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const ReadBook = () => {
    const k=useLoaderData()
    return (
        <div>
            <h1>{k.length}</h1>
            <h2>this is a read book section </h2>
        </div>
    );
};

export default ReadBook;