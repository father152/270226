
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/Header/About/About';
import Projects from "./Components/Header/Projects/Projects"
import Portfolio from "./Components/Header/Portfolio/Portfolio"
import Contact from "./Components/Header/Contact/Contact"



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
         {
          path: "/portfolio",
          element: <Portfolio />,
        },
         {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (

    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>

  )
}

export default App
