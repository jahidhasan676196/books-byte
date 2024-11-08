import { useLoaderData } from "react-router-dom";


const WishListBook = () => {
    const h=useLoaderData()
    return (
        <div>
            <h1>{h[1].author}</h1>
            <h1>This is wish lisrt sed </h1>
        </div>
    );
};

export default WishListBook;