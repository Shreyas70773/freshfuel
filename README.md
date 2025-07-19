# 🥬 FreshFuel — E-commerce Platform with Admin Panel

FreshFuel is a full-stack e-commerce application that enables users to browse and purchase products, while giving store administrators full control over inventory and orders through a dedicated admin panel.

It features a modern frontend for customers, a Material UI-powered admin interface, and a robust backend with secure JWT-based authentication.



## 📸 Demo Screenshots

Storefront Home

<img width="1895" height="758" alt="{A4AE15FF-8444-43B6-8BA7-9A4A8A283510}" src="https://github.com/user-attachments/assets/b406832b-800b-424a-82b0-a6a7ed8e22ae" />

Featured Items

<img width="1894" height="792" alt="{8950E883-FDB4-4FB3-B8C2-B259C8A6C65E}" src="https://github.com/user-attachments/assets/b16cee2c-a127-40ee-a8ac-ab19460649a5" />

Footer

<img width="1898" height="914" alt="{C37FD939-C6A9-4669-A411-B42FDCBBAF22}" src="https://github.com/user-attachments/assets/0897fb74-96ec-48d4-b270-a4df09e1d6e0" />


Product Detail

<img width="1920" height="906" alt="{15412642-3DCF-47C8-9A6E-7944C6A7234F}" src="https://github.com/user-attachments/assets/c1300f1e-eda7-42c7-9145-46bd1d3a72a8" />

Cart Page

<img width="1895" height="458" alt="{90D0FEE9-3CC9-4481-A4EE-062C1C0AC07D}" src="https://github.com/user-attachments/assets/f0449317-5693-4149-b833-c548b6106bdb" />

<img width="1681" height="711" alt="{93ABA1E1-A711-49FC-8250-568EF34FE4B8}" src="https://github.com/user-attachments/assets/0f4223a7-50f1-4c5b-b402-4d5c43bd436d" />

Admin Page

<img width="1889" height="910" alt="{C64A6782-E3F4-445A-9B94-3399D5EF0BA9}" src="https://github.com/user-attachments/assets/5a02a041-da24-44b1-bedd-42faaa30c3f8" />

<img width="1911" height="888" alt="{27906788-0AC1-4BCC-BE70-BE7848AE00BB}" src="https://github.com/user-attachments/assets/f72840ac-94f3-4115-b3ec-1c33056b390f" />




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
