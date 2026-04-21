
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/Header/About/About';
import Projects from "./Components/Header/Projects/Projects"
import Portfolio from "./Components/Header/Portfolio/Portfolio"
import Contact from "./Components/Header/Contact/Contact"
import Project1 from "./Components/Header/Projects/Project1"
import Project2 from "./Components/Header/Projects/Project2"
import Project3 from './Components/Header/Projects/Project3';

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
         {
          path: "/project1",
          element: <Project1 />,
        },
        {
          path: "/project2",
          element: <Project2 />,
        },
        {
          path: "/project3",
          element: <Project3 />,
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
