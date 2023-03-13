import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
// import Title from './components/Title.js'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./components/Shimmer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../src/components/About";
import Error from "../src/components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
//lazyloading

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  
  const [user, setUser] = useState({
    name: 'Rahul Jha',
    email: 'rahul@gmail.com'
  })
  return (
    <React.Fragment>
      <UserContext.Provider value={{
        user:user, setUser : setUser
      }
        }>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Rahul Jha",
              email: "rahul@rahul.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
