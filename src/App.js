import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Layout/Main";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./pages/Blog/Blog";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import AllProjects from "./pages/AllProjects/AllProjects";
import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
// import AnimatedCursor from "react-animated-cursor";

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
          path: "/about-me",
          element: <About></About>,
        },
        {
          path: "/skills",
          element: <Skills></Skills>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/contact-me",
          element: <Contact></Contact>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },

        {
          path: "/all-projects",
          loader: () => fetch(`${process.env.REACT_APP_ALL_PROJECTS_URL}`),
          element: <AllProjects></AllProjects>,
        },

        {
          path: "/projects/:id",
          element: <ProjectDetail></ProjectDetail>,
          loader: async ({ params }) => {
            return fetch(`${process.env.REACT_APP_PROJECTS_URL}/${params.id}`);
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

      <ScrollToTop smooth top={2200} />
    </div>
  );
}

export default App;
