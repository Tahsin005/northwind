# Northwind E-commerce & Support Platform

Northwind is a high-performance, full-stack e-commerce platform designed for modern retail. It seamlessly integrates product management, secure checkout, and real-time customer support via chat and video calls, providing a premium experience for both customers and administrators.

## Features

- **Product Catalog**: Dynamic product browsing with category filtering and detailed views.
- **Shopping Cart**: Real-time cart management with persistent state.
- **Secure Checkout**: Seamless payment processing integrated with **Polar**.
- **User Authentication**: Robust identity management and RBAC (Customer, Support, Admin) powered by **Clerk**.
- **Real-time Support**: 
  - **Order Chat**: Dedicated support channels for every order using **Stream Chat**.
  - **Video Calls**: Direct video support capabilities integrated via **Stream Video**.
- **Admin Dashboard**: Comprehensive product management (CRUD) with image uploads via **ImageKit**.
- **Observability**: Full-stack error tracking and performance monitoring with **Sentry**.

## Tech Stack

### **Backend**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with **Drizzle ORM**
- **Auth**: Clerk SDK
- **Payments**: Polar SDK
- **Real-time**: Stream Chat & Video SDKs
- **File Uploads**: ImageKit SDK
- **Monitoring**: Sentry Node SDK

### **Frontend**
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + DaisyUI
- **State Management**: Zustand (Client) & TanStack Query (Server)
- **Routing**: React Router v7
- **UI Components**: Lucide React Icons

---

## Local Setup

### **Prerequisites**
- Node.js (v18+)
- PostgreSQL Database
- Clerk Account
- Polar Account
- Stream Account
- ImageKit Account
- Sentry Account (Optional)

### **1. Clone the Repository**
```bash
git clone https://github.com/Tahsin005/northwind.git
cd northwind
```

### **2. Backend Setup**
Navigate to the `backend` directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=3001
NODE_ENV=development

DATABASE_URL=your_postgresql_url

CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_pub_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_priv_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

POLAR_ACCESS_TOKEN=your_polar_token
POLAR_WEBHOOK_SECRET=your_polar_webhook_secret
POLAR_CHECKOUT_PRODUCT_ID=your_polar_product_id

SENTRY_DSN=your_sentry_dsn
FRONTEND_URL=http://localhost:5173
```

Push the database schema:
```bash
npm run db:push
```

Start the backend:
```bash
npm run dev
```

### **3. Frontend Setup**
Navigate to the `frontend` directory and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
VITE_SENTRY_DSN=your_sentry_dsn
VITE_API_URL=http://localhost:3001
```

Start the frontend:
```bash
npm run dev
```

---

## Development

- **Backend**: Uses `tsx` for hot-reloading.
- **Frontend**: Uses Vite for lightning-fast development.
- **Database**: Drizzle Kit is used for migrations and schema management.
