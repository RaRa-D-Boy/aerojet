import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AppRouter = createBrowserRouter([...routes])

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={AppRouter} />
}

export default App
