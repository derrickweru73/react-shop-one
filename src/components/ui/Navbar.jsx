import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.length;

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between w-full px-10 py-4">
        {/* Left Section */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-slate-900"
        >
          <ShoppingCart className="h-7 w-7 text-indigo-600" />
          <span>React Shop</span>
        </NavLink>

        {/* Center Section */}
        <div className="flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-slate-700 hover:text-indigo-600 transition-colors"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-slate-700 hover:text-indigo-600 transition-colors"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-indigo-600"
                : "text-slate-700 hover:text-indigo-600 transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <button className="cursor-pointer text-slate-700 hover:text-indigo-600 transition-colors">
            <RefreshCw className="h-5 w-5" />
          </button>

          <NavLink
            to="/cart"
            className="relative text-slate-700 hover:text-indigo-600 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />

            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/login"
            className="font-medium text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Login
          </NavLink>

          <NavLink to="/register">
            <Button className="px-6 py-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Register
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;