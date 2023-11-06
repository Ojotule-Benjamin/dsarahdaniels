import React, { useState } from "react";
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
import MenuNav from "./components/MenuNav";
import BlogPost from "./pages/post/BlogPost";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative ">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      />
      {/* <MenuNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      {menuOpen && <MenuNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
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
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
