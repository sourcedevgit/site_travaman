import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
{
  path: "/",
  element: <Home />
},
{
  path: "shop",
  element: <Shop />
},


])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App