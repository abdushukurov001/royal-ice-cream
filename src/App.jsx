import './App.css'
import Catalog from './components/Catalog';
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
      // element: </>
    }

  ]);
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
