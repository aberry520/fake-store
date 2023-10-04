import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root.jsx'
import Category, { loader as categoryLoader } from './routes/category'
import Categories from './routes/categories'
import ErrorPage from './routes/error-page'
import Home from './routes/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, 
          element: <Home />

        },
        {
          path: "categories/",
          element: <Categories />,
          loader: categoryLoader,
        },
        {
          path: "category/:category",
          element: <Category />,
          loader: categoryLoader,
        },
      ]
    }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
