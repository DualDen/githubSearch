import { createBrowserRouter } from "react-router-dom";
import {App} from "../App";
import {HomePage} from "../pages/HomePage";
import {FavouritesPage} from "../pages/FavouritesPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <h1>Get out of here</h1>,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
          element: <FavouritesPage/>,
          path: "/favourite",
      },
    ],
  },
]);
