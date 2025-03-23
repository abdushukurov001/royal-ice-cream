import './App.css'
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home'
import './i18n/i18';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutPage from "./components/AboutPage/AboutPage.jsx";


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
      path: '/catalog/:categoryId/:productId',
      element: <ProductDetail/>
    },
    {
      path: '/about',
      element: <AboutPage/>
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
