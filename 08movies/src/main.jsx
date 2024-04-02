import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { RouterProvider ,  createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import MainMenu from './components/MainMenu.jsx'
import MainVid from'./components/MainVid.jsx'
import MainBook from './components/MainBook.jsx'
import TvShows from './components/TvShows.jsx'

const navRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children:[
      {
        path:'',
        element:<MainMenu />
      },
      {
        path:'videos',
        element:<MainVid />
      },
      {
        path:'tv_shows',
        element:<TvShows />
      },
      {
        path:'bookmarks',
        element:<MainBook />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={navRouter} />
  </React.StrictMode>,
)
