import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/home'
import ProductsPage from '../pages/products'
import ProductDetailPage from '../pages/productDetail';

export const routes = createBrowserRouter([
    {
        index:true, //path: '/',
        element: <HomePage/>
    },
    {
        path: '/products',
        element: <ProductsPage/>
    },
    {
        path: '/products/:id',
        element: <ProductDetailPage/>
    }
])