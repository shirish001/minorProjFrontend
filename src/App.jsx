import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
// import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", //This is the base path or root URL of your application.
      //whenever a URL matches the root path (/) or any nested paths, the Layout component will be displayed as the main layout.
      element: <Layout />,
      //children array specify nested paths and their corresponding components,
      //These child routes will render within the context of the Layout component.
      children: [
        {
          path: "/",
          element: <HomePage />, // in place of Outlet this is what actually be rendered for "/"
        },
        {
          path: "/list",
          element: <ListPage />, // in place of Outlet this is what actually be rendered for "/list"
        },
        {
          path: "/:id", // for any id after '/'
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/register",
        //   element: <Register />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
