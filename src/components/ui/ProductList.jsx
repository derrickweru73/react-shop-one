import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchInputValue) => {
    setSearchTerm(searchInputValue);
  };

  useEffect(() => {
    fetch("/products/Product.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h2 className="text-center text-2xl py-10">Loading Products...</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>

      <ProductSearch onSearch={handleSearch} />

      <p className="my-4">
        Showing results for <strong>{searchTerm || "All Items"}</strong>
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-red-500">No products match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;