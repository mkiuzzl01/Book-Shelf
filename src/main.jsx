import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Listed_Books from "./components/Listed_Books/Listed_Books.jsx";
import Pages_to_Read from "./components/Pages_to_Read/Pages_to_Read.jsx";
import Book_detail from "./components/Book_detail/Book_detail.jsx";
import "../public/Books.json";
import axios from "axios";
import Wishlist_Books from "./components/Wishlist_Books/Wishlist_Books.jsx";
import Read_Books from "./components/Read_Books/Read_Books.jsx";
import About from "./components/About/About.jsx";
import Contact_Us from "./components/Contact_Us/Contact_Us.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("../public/Books.json"),
        element: <Home></Home>,
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Contact_Us',
        element:<Contact_Us></Contact_Us>
      },
      {
        path: "/Book_detail/:bookId",
        element: <Book_detail></Book_detail>,
        loader: async (params) => {
          return axios.get("../public/Books.json").then((data) => {
            const books = data.data;
            const info = books.find(
              (book) => book.bookId == params.params.bookId
            );
            return info;
          });
        },
      },
      {
        path: "/Listed_Books",
        element: <Listed_Books></Listed_Books>,
        children: [
          {
            index: true,
            element: <Read_Books></Read_Books>,
            loader: async () => {
              return axios.get("../public/Books.json").then((data) => {
                return data.data;
              });
            },
          },
          {
            path: "Wish_list",
            element: <Wishlist_Books></Wishlist_Books>,
            loader: async () => {
              return axios.get("../public/Books.json").then((data) => {
                return data.data;
              });
            },
          },
        ],
      },
      {
        path: "/Pages_to_Read",
        element: <Pages_to_Read></Pages_to_Read>,
        loader: async () => {
          return axios.get("../public/Books.json").then((data) => {
            return data.data;
          });
        },
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
