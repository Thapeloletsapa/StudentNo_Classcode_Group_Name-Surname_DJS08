//import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Vans from "./pages/Vans/vans"
import VanDetail from "./pages/Vans/vanDetail"
import Login from "./pages/Login"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import AuthRequired from "./components/AuthRequired"

function App() {

  return (
    <h1>Start here</h1>
  )
}

export default App
