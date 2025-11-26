🛒 ShopNexa – Modern E-Commerce Web Application

ShopNexa is a full-featured e-commerce platform built with a Next.js frontend and an Express.js + MongoDB backend.
It includes product management, user authentication, and a smooth shopping cart experience with a clean UI powered by DaisyUI.

🔗 Live Demo: https://my-next-js-app-tan-sigma.vercel.app/

🔗 Backend API: https://next-js-ecom-server.vercel.app/

🚀 Features
🔐 Authentication (NextAuth + Express API)

Login / Register using Email + Password

Secure authentication using NextAuth Credentials Provider

User information stored in MongoDB via Express.js API

Google OAuth support (optional)

🛍️ Product Management

Add new products

Edit and update product details

Delete products

Fetch products from backend API

Display with image, price, category, and rating

👤 User Features

Protected pages (only logged-in users can access)

Add products 

Managed Products

🗄️ Backend (Express.js + MongoDB)

REST API endpoints for users & products

Secure user registration

Hosted backend on Vercel 

🎨 UI / UX

TailwindCSS with DaisyUI

Modern icons using lucide-react

Fully responsive interface

SweetAlert2 notifications

🏗️ Tech Stack
Category	Technology
Frontend	Next.js 16,
Backend	Express.js, Node.js
Database	MongoDB
Auth	NextAuth (Credentials + Google Provider)
Styling	TailwindCSS, DaisyUI
UI Alerts	SweetAlert2
Icons	lucide-react
📦 Installation & Setup
🖥️ Frontend (Next.js)
1️⃣ Clone the repository
git clone https://github.com/your-username/next-js-E-com.git
cd next-js-E-com

2️⃣ Install dependencies
npm install

3️⃣ Create .env.local file

Create a .env.local file in the project root:

NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000



GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


✔ You can remove Google keys if not using Google login.

4️⃣ Run the frontend
npm run dev


Frontend will start at:

http://localhost:3000

🔧 Backend Setup (Express.js)

If you want to run backend locally:

1️⃣ Clone backend repository
git clone https://github.com/your-username/shopnexa-backend.git
cd shopnexa-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=5000

4️⃣ Run backend
npm start


Backend will run at:

http://localhost:5000
