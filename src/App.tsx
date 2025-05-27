import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ProductList from './products/components/ProductList';
import MainLayout from './MainLayout';
import Deals from './dashboard/components/Deals';
import BuyAgain from './dashboard/components/BuyAgain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        children: [
          { path: "/deals", element: <Deals /> },
          { path: "/buy-again", element: <BuyAgain /> }
        ]
      },
      { path: 'products', element: <ProductList /> }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
