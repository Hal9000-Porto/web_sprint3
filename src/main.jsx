import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Feedback from './routes/FeedBack/index.jsx'
import Historico from './routes/Historico/index.jsx'
import Membros from './routes/Membros/index.jsx'
import Recomendacao from './routes/Recomendacao/index.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: '/',
      element: <Recomendacao />,
    }, {
      path: '/membros',
      element: <Membros />,
    }, {
      path: '/historico',
      element: <Historico />,
    }, {
      path: '/feedback',
      element: <Feedback />,
    }
  ],
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
