import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Layout/Main";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import ContactMe from "./components/ContactMe/ContactMe";
import Blog from "./pages/Blog/Blog";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import AllProjects from "./pages/AllProjects/AllProjects";

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
          path: "/blogs",
          element: <Blog></Blog>,
        },

        {
          path: "/all-projects",
          loader: () =>
            fetch("https://portfolio-server-chi.vercel.app/allProjects"),
          // element: <Projects></Projects>,
          element: <AllProjects></AllProjects>,
        },

        {
          path: "/projects/:id",
          element: <ProjectDetail></ProjectDetail>,
          loader: async ({ params }) => {
            return fetch(
              `https://portfolio-server-chi.vercel.app/projects/${params.id}`
            );
          },
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
