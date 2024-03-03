import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ShoppingCart from './Pages/ShoppingCart.tsx'
import ErrorPage from './Pages/ErrorPage.tsx'
import Root from './Pages/Root.tsx';

import ItemPage, { productLoader } from './Pages/ItemPage.tsx';
import Shop, { shopLoader }from './Pages/Shop.tsx';
import ContactPage from './Pages/Contact.tsx';
import Home from './Pages/Home.tsx';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            { 
              index: true, 
              element: <Home />,
              loader: shopLoader
            },
            {
              path: "shop",
              element: <Shop />,
              loader: shopLoader
            },
            {
              path: "shop/:item",
              element: <ItemPage />,
              loader: ({params}) => productLoader(params.item)
            },
            {
              path: "shoppingcart",
              element: <ShoppingCart />,
            },
            {
              path: "contact",
              element: <ContactPage />,
            },
          ]
        },
      ]);

      return <RouterProvider router={router} />
}

export default Router;