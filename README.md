# 🎧 Audiophile E-Commerce Store
**Live demo:** [audiophile-lilac-psi.vercel.app](https://audiophile-lilac-psi.vercel.app) 

Audiophile is a full-stack e-commerce web application built with **Next.js**, **Convex**, and **Nodemailer**. It delivers a modern, responsive shopping experience with serverless backend logic and automated email notifications for orders.

## 🚀 Features

- 🛒 Product listing, detail pages, and cart functionality
- 💳 Order creation and checkout workflow
- 📧 Automated order confirmation emails using **Nodemailer**
- ⚙️ Serverless backend powered by **Convex**
- 🌗 Clean, responsive UI using **Tailwind CSS**
- 🧩 TypeScript for type safety
- 🌍 Easy deployment via **Vercel**

## 🧰 Tech Stack

**Frontend**
- Next.js 14
- React
- TypeScript
- Tailwind CSS

**Backend**
- Convex (for data storage and CRUD operations)
- Nodemailer (for transactional emails)

**Deployment**
- Vercel (frontend)
- Convex Cloud (backend)

## 📦 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or later)
- npm, yarn, or pnpm
- Convex CLI (install via `npm install convex`)
- An SMTP service for Nodemailer (e.g., Gmail, Resend, or SendGrid)

### Clone the Repository
git clone https://github.com/blessing986/audiophile.git  
cd audiophile

### Install Dependencies
npm install  
# or  
yarn  
# or  
pnpm install

### Environment Variables
Create a `.env.local` file in the root directory and add the following:

CONVEX_DEPLOYMENT=your_convex_deployment_url  
NEXT_PUBLIC_CONVEX_URL=http://127.0.0.1:3210  
EMAIL_USER=your_email@example.com  
EMAIL_PASS=your_email_password_or_app_password  
RESEND_API_KEY=your_resend_key_if_any

### Run Convex Backend
npx convex dev

### Run the Frontend
npm run dev  
Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧮 Folder Structure

audiophile/  
├─ convex/  
│  ├─ orders.ts              → Order logic (create, fetch, update)  
│  ├─ products.ts            → Product fetching logic  
│  ├─ dataModel.ts           → Convex schema definition  
│  └─ auth.ts (optional)     → Authentication logic  
├─ src/  
│  ├─ app/                   → Next.js App Router  
│  ├─ components/            → Reusable UI components  
│  ├─ lib/                   → Utility functions (helpers)  
│  ├─ data/                  → Static product data  
│  └─ styles/                → Global styles  
├─ public/                   → Static assets (images, icons)  
├─ .env.local                → Environment variables  
├─ next.config.mjs  
├─ package.json  
└─ tsconfig.json  

## 📧 Email Functionality

This project uses **Nodemailer** to send HTML order confirmation emails.  
The email logic lives in `/app/api/send-order-email/route.ts` and includes:
- Customer name and email  
- Ordered items, quantity, and total price  
- Automatically triggered after successful order creation

## 🔗 Convex Integration

**Convex** powers the backend, handling:
- CRUD operations for orders and products  
- Schema definitions in `dataModel.ts`  
- Secure, serverless storage

To deploy Convex in production:  
npx convex deploy

## 🧪 Scripts

npm run dev        → Start development server  
npm run build      → Build for production  
npm run start      → Run production build  
npm run lint       → Lint code for errors  

## 📬 Contact

**Author:** Blessing  
**GitHub:** [@blessing986](https://github.com/blessing986)  
**Project Link:** [https://github.com/blessing986/audiophile](https://github.com/blessing986/audiophile)

⭐️ *If you like this project, please give it a star on GitHub!*
