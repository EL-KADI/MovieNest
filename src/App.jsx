import { useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { initFlowbite } from "flowbite";
import "./App.css";
import TopRated from "./Components/TopRated/TopRated";
import People from "./Components/People/People";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import TopRatedTV from "./Components/TopRatedTV/TopRatedTV";
import TvDetails from "./Components/TvDetails/TvDetails";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import PersonDetails from "./Components/PersonDetail/PersonDetail";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "/tv/:id",
          element: <TvDetails />,
        },
        {
          path: "toprated",
          element: <TopRated />,
        },
        {
          path: "topratedtv",
          element: <TopRatedTV />,
        },
        {
          path: "upcoming",
          element: <UpcomingMovies />,
        },
        {
          path: "people",
          element: <People />,
        },
        {
          path: "/person/:id",
          element: <PersonDetails />,
        },
        {
          path: "register",
          element: <Register />,
        },

        {
          path: "login",
          element: <Login />,
        },

        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
