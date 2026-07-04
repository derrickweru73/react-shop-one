## React Shop One

---

## Project Overview

React Shop is a modern e-commerce web application built with React and Vite. It enables users to browse products, search by keywords, view detailed product information, add items to a shopping cart, and complete purchases through a protected checkout page. The application focuses on reusable components, responsive design, and an intuitive shopping experience.

---

## Problems It Solves

- Easy Product Discovery: Browse products in a clean, organized catalog.
- Fast Searching: Instantly filter products using the search feature.
- Simple Shopping Experience: Add, remove, and manage items in a shopping cart.
- Secure Checkout Access: Restricts checkout to authenticated users.
- Persistent Cart Storage: Keeps cart data available even after refreshing the page.

---

## Features

### Product Catalog

- Display products using reusable product cards.
- Responsive product grid layout.
- Product images, descriptions, prices, and categories.
- Individual product details page.

### Search & Filtering

- Real-time product search.
- Filter products by keywords.
- Dynamic rendering of matching products.

### Shopping Cart

- Add products to cart.
- Remove products from cart.
- Update product quantities.
- View total number of items.
- Calculate total order cost automatically.

### User Authentication

- Login page.
- Registration page.
- Protected checkout route.
- User greeting after successful login.

### Checkout

- Secure checkout page.
- Order summary.
- Checkout success confirmation page.

### Navigation

- Responsive navigation bar.
- Quick navigation between pages.
- Active route highlighting using `React Router`.

### Responsive Design

- Mobile-friendly layouts.
- Tablet optimization.
- Desktop support.
- Flexible `Grid` and `Flexbox` layouts.

---

## Technical Concepts Implemented

### React Fundamentals

- Functional Components
- JSX
- Props
- Component Reusability

### React Hooks

- useState
- useEffect
- useContext
- Custom Context API

### Routing

- React Router DOM
- Nested Routes
- Protected Routes
- Dynamic Routing

### State Management

- Context API
- Global Cart State
- User Authentication State

### Data Handling

- JSON Product Dataset
- Array Filtering
- Array Mapping
- Dynamic Rendering

### Styling

- Tailwind CSS
- CSS Utilities
- Responsive Design
- Flexbox
- CSS Grid

### User Experience

- Toast Notifications
- Loading States
- Success Messages
- Empty Cart Handling

---

## Project Structure

```text
react-shop/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── products/
│   │       └── Product.json
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductsList.jsx
│   │   ├── ProductSearch.jsx
│   │   ├── Cart.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── CheckoutSuccess.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── CartPage.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Checkout.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Technologies Used

- React 19+
- Vite
- React Router DOM
- Tailwind CSS
- Context API
- Local Storage
- JavaScript (ES6+)

---

## Visual Identity

- Brand Name: React Shop
- Primary Color: Indigo
- Secondary Color: Emerald
- Accent Color: White & Charcoal

---

## Requirements

Before running this project, install:

- Node.js
- npm

---

## Installation

### Clone Repository

```bash
git clone https://github.com
```

### Open Project

```bash
cd react-shop
code .
```

### Install Dependencies

```bash
npm install
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

Open the `localhost` link shown in the terminal.

---

## How to Use

1. Browse available products.
2. Search for products using the search bar.
3. Click a product to view its details.
4. Add products to your shopping cart.
5. Review items in the cart.
6. Login or register to continue.
7. Proceed to the protected checkout page.
8. Complete checkout and view the success page.

---

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Deploy.

### GitHub Pages

```bash
npm run deploy
```

---

## Future Improvements

- Product categories
- Price filtering
- Wishlist functionality
- Product reviews and ratings
- Payment gateway integration
- Order history
- User profile dashboard
- Dark mode
- Product recommendations
- Inventory management
- Backend database integration

---

## Privacy & Data Storage

Shopping cart information is stored locally using the browser's Local Storage API. No personal information is transmitted to external servers.

---

## Contributing

### How to Contribute

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request.

---

## Author

Derrick Weru

---

## License

This project is developed for educational purposes only.