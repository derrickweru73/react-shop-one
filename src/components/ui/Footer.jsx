import { Link } from "react-router-dom";
import {
  ShoppingCart,
 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <ShoppingCart className="h-7 w-7 text-indigo-500" />
              <span>React Shop</span>
            </div>

            <p className="mt-4 text-sm leading-7">
              Your trusted destination for quality products at affordable
              prices. Shop confidently with a modern and secure shopping
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-indigo-400 transition-colors">
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-indigo-400 transition-colors"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Support
            </h3>

            <div className="flex flex-col gap-2">
              <p>FAQ</p>
              <p>Shipping</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              </div>
          </div>
        </div>

        <hr className="my-8 border-slate-700" />

        <div className="text-center text-sm text-slate-400">
          © 2026 React Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;