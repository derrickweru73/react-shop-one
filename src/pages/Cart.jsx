import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function Cart({ onCheckout }) {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }

    navigate("/checkout");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Shopping Cart</span>

            <span className="text-sm text-gray-500">
              {cart.length} item{cart.length !== 1 ? "s" : ""}
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border rounded-lg p-4"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="text-sm text-gray-500">
                      Category: {item.category}
                    </p>

                    <p className="text-sm">
                      Ksh. {item.price}
                    </p>
                  </div>

                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>

        {cart.length > 0 && (
          <CardFooter className="flex flex-col gap-4">
            <div className="flex justify-between w-full text-lg font-bold">
              <span>Total</span>

              <span>Ksh. {totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex w-full gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>

              <Button
                className="flex-1"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default Cart;