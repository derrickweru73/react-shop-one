import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setCart([]);
    navigate("/checkoutsuccess");
  };

  return (
    <div className="container max-w-4xl mx-auto py-10 px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Checkout
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              className="w-full border rounded-md p-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={handleChange}
              className="w-full border rounded-md p-3"
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={customer.address}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md p-3"
              required
            />

            <div className="border rounded-lg p-4 space-y-3">
              <h2 className="text-lg font-semibold">
                Order Summary
              </h2>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>{item.name}</span>
                  <span>Ksh. {item.price}</span>
                </div>
              ))}

              <div className="flex justify-between font-bold text-lg pt-3">
                <span>Total</span>
                <span>Ksh. {totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <CardFooter className="px-0">
              <Button className="w-full" type="submit">
                Place Order
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Checkout;