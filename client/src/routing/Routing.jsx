import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// Pages
import { Home, AboutUs, Enroll, ContactPage, Academics } from "../pages/index"
// Components
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

// Layout component that includes navigation and renders children
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  )
}

// Create router with routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes it the default route
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "enroll",
        element: <Enroll />,
      },
    ],
  },
])

// Main App component
function Routing() {
  return <RouterProvider router={router} />
}

export default Routing
