import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Moon, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, isAuthenticated, logout } = useAuth();

  const cartItemCount = cart?.length || 0;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-slate-900 hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-7 w-7 text-indigo-600" />
          <span>React Shop</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle (Coming Soon) */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            disabled
            title="Dark mode coming soon"
          >
            <Moon className="h-5 w-5" />
          </Button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
            >
              <ShoppingCart className="h-5 w-5" />

              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-3 pl-2 border-l">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                  <User className="h-4 w-4 text-indigo-600" />
                </div>

                <span className="hidden md:inline font-medium">
                  {user?.name}
                </span>
              </div>

              <Button
                variant="destructive"
                size="sm"
                onClick={logout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">
                  Logout
                </span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3 pl-2 border-l">
              <Link
                to="/login"
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
              >
                Login
              </Link>

              <Link to="/register">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;