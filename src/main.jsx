import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Listed_Books from './components/Listed_Books/Listed_Books.jsx'
import Pages_to_Read from './components/Pages_to_Read/Pages_to_Read.jsx'
import Book_detail from './components/Book_detail/Book_detail.jsx'
import '../public/Books.json'
import axios from "axios";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        loader:()=>fetch('../public/Books.json'),
        element:<Home></Home>
      },
      {
        path:'/Book_detail/:bookId',
        element:<Book_detail></Book_detail>,
        loader:async(params)=>{
         return axios.get('../public/Books.json').then((data)=>{
          const books = data.data;
           const info = books.find(book=> book.bookId == params.params.bookId)
           return info;
          }) ;
          
        }
      },
      {
        path:'/Listed_Books',
        element:<Listed_Books></Listed_Books>,
      },
      {
        path:'/Pages_to_Read',
        element:<Pages_to_Read></Pages_to_Read>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
