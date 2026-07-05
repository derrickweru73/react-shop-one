import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your store.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package size={20} />
              Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold">24</h2>
            <p className="text-muted-foreground">
              Total Products
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart size={20} />
              Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold">18</h2>
            <p className="text-muted-foreground">
              Orders Today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold">56</h2>
            <p className="text-muted-foreground">
              Registered Users
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign size={20} />
              Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold">
              Ksh 45,000
            </h2>
            <p className="text-muted-foreground">
              Monthly Revenue
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Manage Products</CardTitle>
          </CardHeader>
          <CardContent>
            Add, edit and remove products from your store.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Orders</CardTitle>
          </CardHeader>
          <CardContent>
            View customer orders and update their status.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Users</CardTitle>
          </CardHeader>
          <CardContent>
            View registered users and assign roles.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}