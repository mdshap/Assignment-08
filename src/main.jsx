import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import Root from './Layouts/Root'
import Apps from './Compoments/Apps'
import Installation from './Compoments/Installation'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      }
    ]
  }
  ])
createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
  <Root></Root>
 </RouterProvider> 
)
