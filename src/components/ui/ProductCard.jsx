import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

function ProductCard({ id, name, price, description, category, image }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover rounded-md"
          />
        </Link>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>

          <p>
            <span className="font-semibold">Price:</span> Ksh. {price}
          </p>

          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>

        <Button className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;