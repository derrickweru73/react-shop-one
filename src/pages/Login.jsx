import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Loader2 } from "lucide-react";

function Login() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const fakeToken = "jwt-access-token-example";

      const fakeUser = {
        id: Date.now(),
        name: formData.email.split("@")[0],
        email: formData.email,
        role:
          formData.email === "admin@reactshop.com"
            ? "admin"
            : "customer",
      };

      login(fakeToken, fakeUser);

      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Welcome Back
          </CardTitle>

          <CardDescription className="text-center">
            Sign in to continue shopping.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md border border-red-200 bg-red-100 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>

                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 mt-2">
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;