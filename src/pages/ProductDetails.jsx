import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

function ProductDetail() {
  const { productId } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products/Product.json")
      .then((resp) => resp.json())
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.id === Number(productId)
        );

        setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;

    setCart([...cart, product]);
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product not found.</h2>

        <Link to="/">
          <Button className="mt-6">
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover"
          />

          <div className="space-y-4">
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p className="text-xl font-bold">
              Ksh. {product.price}
            </p>

            <p>{product.description}</p>

            <div className="flex gap-4">
              <Button onClick={handleAddToCart}>
                Add to Cart
              </Button>

              <Link to="/">
                <Button variant="outline">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetail;