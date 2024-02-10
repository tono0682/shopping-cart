import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ShoppingCart from './Pages/ShoppingCart.tsx'
import ErrorPage from './Pages/ErrorPage.tsx'
import Root from './Pages/Root.tsx';
import Home from './Pages/Home.tsx';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home/> },
            { path: "shoppingcart",element: <ShoppingCart /> }
          ]
        },
      ]);

      return <RouterProvider router={router} />
}

export default Router;