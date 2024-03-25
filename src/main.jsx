import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Listed_Books from './components/Listed_Books/Listed_Books.jsx'
import Pages_to_Read from './components/Pages_to_Read/Pages_to_Read.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
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
