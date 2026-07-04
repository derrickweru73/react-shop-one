import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Favorite Product
          </h1>

          <p className="max-w-2xl text-lg text-slate-300 mb-8">
            Shop the latest electronics, fashion, accessories, and everyday
            essentials at unbeatable prices. Quality products with a seamless
            shopping experience.
          </p>

          <div className="flex gap-4">
            <Link to="/products">
              <Button size="lg">Shop Now</Button>
            </Link>

            <Link to="/register">
              <Button variant="outline" size="lg">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-3">
              Quality Products
            </h2>

            <p className="text-gray-600">
              Carefully selected products designed to meet your everyday needs.
            </p>
          </div>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-3">
              Fast Delivery
            </h2>

            <p className="text-gray-600">
              Receive your orders quickly with reliable nationwide shipping.
            </p>
          </div>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-3">
              Secure Shopping
            </h2>

            <p className="text-gray-600">
              Shop confidently with a safe checkout experience and protected
              transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-gray-600 mb-8">
            Browse our collection and find products you'll love.
          </p>

          <Link to="/products">
            <Button size="lg">
              Explore Products
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;