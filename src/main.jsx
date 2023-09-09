import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Membros from './routes/Membros/index.jsx'
import Login from './routes/Login/index.jsx'
import Historico from './routes/Historico/index.jsx'
import FeedBack from './routes/FeedBack/index.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },{
    path: '/membros',
    element: <Membros/>,
  },{
    path: '/historico',
    element: <Historico/>,
  },{
    path: '/feedback',
    element: <FeedBack/>,
  },{
    path: '/login',
    element: <Login/>,
  }
],
}])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
