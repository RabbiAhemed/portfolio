import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Layout/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("data.json"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("data.json"),
          element: <Home></Home>,
        },

        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <ContactMe></ContactMe>,
        },
        {
          path: "/projects",
          loader: () => fetch("data.json"),
          element: <Projects></Projects>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
