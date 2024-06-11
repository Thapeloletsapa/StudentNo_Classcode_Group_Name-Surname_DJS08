import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import VanDetail from "./pages/Vans/VanDetail.jsx";
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import "./server.js";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound"
import AuthRequired from "./components/AuthRequired"


/* Setup and Basic Configuration of React Router
React Router is a popular library used in React applications to manage client-side routing.
 It allows us to navigate between different pages or views within our application without requiring a full page reload. 
 To set up React Router, we use the BrowserRouter component, which wraps our entire application. 
 Inside the BrowserRouter, we define our routes using the <Routes> and <Route> components.
The <Routes> component is used to define a collection of routes, while the <Route> component is used to define a single route.
 We can think of routes as a mapping between a URL and a component to render.
 */

function App() {
  return (
    <BrowserRouter>                                              
      <Routes>
      <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />        //In this example, we have two routes: one for the home page and one for the about page.//
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

<Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

        <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;