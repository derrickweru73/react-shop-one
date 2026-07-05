import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
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

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
