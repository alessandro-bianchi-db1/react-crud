import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Create/>
  },
  {
    path: '/read',
    element: <Read/>
  },
  {
    path: '/update',
    element: <Update/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;