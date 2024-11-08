import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import BookDetails from './Component/BookDetils/BookDetails.jsx';
import ListedBook from './Component/ListedBook/ListedBook.jsx';
import ReadBook from './Component/ReadBook/ReadBook.jsx';
import WishListBook from './Component/WishListBook/WishListBook.jsx';
import Eror from './Component/Eror/Eror.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('books.json')
      },
      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('books.json')
      },
      {
        path:"/listed",
        element:<ListedBook></ListedBook>,
        children:[
          {
            index:true,
            element:<ReadBook></ReadBook>,
            loader:()=>fetch('../books.json')
          },
          {
            path:"wishlist",
            element:<WishListBook></WishListBook>,
             loader:()=>fetch('../books.json')
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
