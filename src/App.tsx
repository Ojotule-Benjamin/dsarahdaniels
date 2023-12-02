import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Events from "./pages/events/Events";
import Enquiry from "./pages/enquiry/Enquiry";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./pages/gallery/Gallery";
import Service from "./pages/service/Service";

import BlogPost from "./pages/post/BlogPost";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/service/:data",
        element: <Service />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/gallery/",
        element: <Gallery />,
      },
      {
        path: "/enquiry",
        element: <Enquiry />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/blogPost/:data",
        element: <BlogPost />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" w-full absolute left-0 right-0 top-28 lg:top-40">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
