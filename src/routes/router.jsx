import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/movie",
    element: <MovieList></MovieList>,
    loader: () => fetch("/movieList.json"),
  },

  {
    path: "/",
    element: <h2>Error404</h2>,
  },
]);
export default router;
