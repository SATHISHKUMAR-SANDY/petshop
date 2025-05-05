import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AllCart from "./Components/AllCart";
import AllProduct from "./Components/AllProduct";
import AllProductcat from "./Components/AllProductcat";
import AllProductsbird from "./Components/AllProductsbird";
import AllProductsFish from "./Components/AllProductsFish";
import Footer from "./Components/Footer";
import Husky from "./Components/Husky";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import CatProfile from "./Pages/CatProfile";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Paymentpage from "./Pages/Paymentpage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/payment/:id" element={<Paymentpage></Paymentpage>} ></Route>

        {/* Main route for Dog Products */}
        <Route path="/dog" element={<AllProduct />}>
          <Route index element={<Navigate to="preventivicare" replace />} />
          <Route path=":category" element={<AllCart />} />
        </Route>
        <Route
          path="/Productlist/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cat" element={<AllProductcat></AllProductcat>}>
          <Route
            index
            element={<Navigate to="catpreventivicare" replace />}
          ></Route>
          <Route path=":category" element={<AllCart />} />
        </Route>

        <Route path="/fish" element={<AllProductsFish></AllProductsFish>}>
          <Route index element={<Navigate to="Fish" replace />}></Route>
          <Route path=":category" element={<AllCart />} />
        </Route>

        <Route path="/bird" element={<AllProductsbird></AllProductsbird>}>
          <Route index element={<Navigate to="Bird" replace />}></Route>
          <Route path=":category" element={<AllCart />} />
        </Route>
        <Route path="/pet/:type" element={<Husky></Husky>}></Route>
        <Route path="/catp" element={<CatProfile></CatProfile>}></Route>

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
