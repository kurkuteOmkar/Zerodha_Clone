import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./landing_page/signup/SignUp.jsx"
import Signin from "./landing_page/signin/Signin.jsx"
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from "./landing_page/products/ProductPage.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import TopNav from './landing_page/TopNav.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <TopNav/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/signin" element={<Signin/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/product" element={<ProductPage/>}></Route>
  <Route path="/pricing" element={<PricingPage/>}></Route>
  <Route path="/support" element={<SupportPage/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>
)
