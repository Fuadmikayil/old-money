import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/home'
import ProductsPage from '../pages/products'
import ProductDetailPage from '../pages/productDetail';
import AboutPage from "../pages/about";
import MacbookOutlet from '../components/outlet/aboutOutlets/macbookOutlet';
import IphoneOutlet from '../components/outlet/aboutOutlets/iphoneOutlet';
import IwatchOutlet from '../components/outlet/aboutOutlets/iwatchOutlet';

export const routes = createBrowserRouter([
  {
    index: true, //path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    children: [
      {
        index: true,
        element: <MacbookOutlet/>,
      },
      {
        path: 'iphone',
        element: <IphoneOutlet/>,
      },
      {
        path: 'iwatch',
        element: <IwatchOutlet/>,
      },
    ],
  },
]);