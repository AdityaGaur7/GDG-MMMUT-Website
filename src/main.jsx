import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './utils/Contact'
import Team from './Pages/Team'
// import Profile from './Profile'

///yha par is function mai sare routes ha jo ek array of object mai save h...
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/team',
    element: <Team />
  },
  // {
  //   path: '/profile',
  //   element: <Profile />
  // },
  // {
  //   path: '/add-listing',
  //   element: <AddListing />
  // },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
          <RouterProvider router={router} />
  </StrictMode>,
)
