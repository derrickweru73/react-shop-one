import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container max-w-md mx-auto text-center py-20 space-y-8">
      <div className="flex justify-center">
        <CheckCircle className="h-20 w-20 text-emerald-500" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Order Confirmed!
        </h1>

        <p className="text-muted-foreground">
          Thank you for shopping with <strong>React Shop</strong>.
        </p>

        <p className="text-sm text-muted-foreground">
          Your order has been received successfully and is now being processed.
          You'll receive an email confirmation with your order details shortly.
        </p>
      </div>

      <div className="space-y-3">
        <Button
          className="w-full"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/products")}
        >
          Browse More Products
        </Button>
      </div>
    </div>
  );
}