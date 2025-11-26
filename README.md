# 🛒 ShopNexa – Modern E-Commerce Web Application

ShopNexa is a full-featured e-commerce platform built with a **Next.js frontend** and an **Express.js + MongoDB backend**.  
It includes authentication, product management, protected routes, and a smooth shopping experience powered by **DaisyUI**.

---

## 🔗 Live Demo  
https://my-next-js-app-tan-sigma.vercel.app/

## 🔗 Backend API  
https://next-js-ecom-server.vercel.app/

---

# 🚀 Features

## 🔐 Authentication (NextAuth + Express API)
- Login / Register using **Email + Password**
- Secure authentication using **NextAuth Credentials Provider**
- User information stored in **MongoDB**
- Google OAuth support (optional)

## 🛍️ Product Management
- Add new products  
- Edit/update products  
- Delete products  
- Fetch products from backend API  
- Display products with images, price, rating, and category  

## 👤 User Features
- Protected pages (only logged-in users can access)
- Add products to cart  
- Manage products  

## 🗄️ Backend (Express.js + MongoDB)
- REST API endpoints for **users & products**
- Secure user registration
- Hosted backend on **Vercel**

## 🎨 UI / UX
- TailwindCSS + DaisyUI  
- Modern icons via **lucide-react**
- SweetAlert2 for alerts
- Fully responsive modern UI

---

# 🏗️ Tech Stack

| Category   | Technology |
|------------|------------|
| Frontend   | Next.js 16 |
| Backend    | Express.js, Node.js |
| Database   | MongoDB |
| Auth       | NextAuth (Credentials + Google Provider) |
| Styling    | TailwindCSS, DaisyUI |
| UI Alerts  | SweetAlert2 |
| Icons      | lucide-react |

---

# 📦 Installation & Setup

# 🖥️ Frontend (Next.js)

## 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/next-js-E-com.git
cd next-js-E-com
```
2️⃣ Install dependencies
npm install

3️⃣ Create .env.local file

Create a .env.local file in the project root:

NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


✔ You may remove Google keys if not using Google login.

4️⃣ Run the frontend
npm run dev


Your frontend will start at:

http://localhost:3000

🔧 Backend Setup (Express.js)

If you want to run backend locally:

1️⃣ Clone backend repository
git clone https://github.com/your-username/shopnexa-backend.git
cd foldername

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=5000

4️⃣ Run backend server
npm start


Backend will run at:

http://localhost:5000
