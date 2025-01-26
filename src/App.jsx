import './App.css'
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/catalog',
      element: <Catalog/>
    },
    {
      path: '/catalog/:id',
      element: <ProductDetail/>
    },

  ]);
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
