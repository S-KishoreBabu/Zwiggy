import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body'
import ErrorPage from './ErrorPage.jsx'
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import About from './About.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Cart from './components/Cart.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,   // ✅ Global error page
    children: [
      {
        index: true,              // ✅ Instead of path: '/'
        element: <Body />
      },
      {
        path: 'about',            // ✅ no leading slash in child
        element: <About/>
      },
      {
        path: 'cart',            // ✅ no leading slash in child
        element: <Cart />
      },
      {
        path: 'restaurant/:id',            // ✅ no leading slash in child
        element: <RestaurantMenu/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={appRouter}/>
  // </StrictMode>,
)


