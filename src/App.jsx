import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
