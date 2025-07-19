# 🥬 FreshFuel — E-commerce Platform with Admin Panel

FreshFuel is a full-stack e-commerce application that enables users to browse and purchase products, while giving store administrators full control over inventory and orders through a dedicated admin panel.

It features a modern frontend for customers, a Material UI-powered admin interface, and a robust backend with secure JWT-based authentication.

---

## 📸 Demo Screenshots


| Feature            | Screenshot |
|-------------------|------------|
| Storefront Home   | ![](./screenshots/storefront-home.png) |
| Product Detail    | ![](./screenshots/product-detail.png) |
| Cart Page         | ![](./screenshots/cart.png) |
| User Login        | ![](./screenshots/user-login.png) |
| Admin Dashboard   | ![](./screenshots/admin-dashboard.png) |
| Admin Product Edit| ![](./screenshots/admin-product-edit.png) |

---

## ⚙️ Tech Stack

### Frontend (`freshfuelmain`)
- React 18
- Redux Toolkit
- React Router DOM
- Axios
- React Scripts

### Admin Panel (`admin`)
- React 18
- Redux Toolkit
- Material UI
- Axios
- React Router DOM

### Backend (`backend`)
- Node.js + Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Express Async Handler
- BcryptJS
- Dotenv
- File Upload (via `uploads/` directory)

---

## 📁 Project Structure
freshfuel/
├── freshfuelmain/ # Customer-facing React frontend
├── backend/ # Express backend API
├── admin/ # Admin dashboard (React + MUI)


---

## 🌐 Live Demo / Deployment

*Not deployed yet.*  
> Optionally host using Vercel, Netlify (frontend/admin), and Render/Heroku (backend + MongoDB Atlas).

---

## 🧠 Features

### 🛒 Customer Side (Frontend)
- Product listing, search, and detail view
- Cart and checkout flow
- User registration and login
- Order placement and order history
- JWT authentication

### 🧑‍💼 Admin Panel
- Admin authentication
- Product management (Add/Edit/Delete)
- Order management
- Inventory control
- Dashboard UI using Material UI

### 🛠️ Backend
- RESTful API with Express
- MongoDB database models for products, users, and orders
- Protected routes using JWT
- Image upload functionality
- Seed script for demo products (`npm run seed`)

---

## 📦 Environment Variables

Create a `.env` file in the backend with the following:


MONGO_URI=<your-mongodb-connection-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000  # Optional

🚀 Getting Started
Clone the repository

```
git clone https://github.com/Shreyas70773/freshfuel.git
cd freshfuel
```

🧮 Backend Setup

cd backend
npm install
npm run seed        # Optional: Populate DB with sample data
npm run server      # Starts dev server with nodemon

🛍️ Frontend Setup (Storefront)

cd ../freshfuelmain
npm install
npm start

🧑‍💼 Admin Panel Setup

cd ../admin
npm install
npm start

🔐 Authentication Flow

JWT-based login system for both customers and admins

Protected routes using authMiddleware.js

Token stored in Redux or localStorage

Admins have elevated privileges

🧾 API Endpoints

| Endpoint                   | Description       |
| -------------------------- | ----------------- |
| `POST /api/users/login`    | Login user        |
| `POST /api/users/register` | Register new user |
| `GET /api/products`        | List all products |
| `POST /api/products`       | Add a new product |
| `PUT /api/products/:id`    | Update product    |
| `DELETE /api/products/:id` | Delete product    |
| `POST /api/orders`         | Place new order   |
| `POST /api/upload`         | Upload image file |

📦 Database Models
User Model
name, email, password, isAdmin, timestamps

Product Model
name, image, description, brand, category, price, countInStock, rating, timestamps

Order Model
user, orderItems[], shippingAddress, paymentMethod, paymentResult, totalPrice, isPaid, isDelivered, timestamps


📑 Seed Data
You can quickly populate the database using the following command:
cd backend
npm run seed

📌 To Do
 Add unit tests

 Add email notifications

 Implement payment gateway (e.g., Stripe)

 Host frontend/admin/backend for public demo

🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss.

📝 License
This project is licensed under the MIT License.

📧 Contact
For questions, reach out to @Shreyas70773

🌟 Support
Give a ⭐️ if you liked the project!
