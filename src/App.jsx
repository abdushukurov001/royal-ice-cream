import './App.css'
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home'
import './i18n/i18';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


function NotFoundRedirect() {
  return <Home />; 
}

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
    {
      path: '*', 
      element: <NotFoundRedirect />,
    },

  ]);
 

  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
