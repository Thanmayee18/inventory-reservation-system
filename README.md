# Inventory Reservation System

This project is a simple inventory reservation system built using Next.js, TypeScript, Prisma, SQLite, and Tailwind CSS.

## Features

- Product listing page
- Warehouse stock display
- Reserve product functionality
- Reservation creation
- Stock reservation handling
- Prevents overbooking when stock is unavailable
- Reservation details page
- Confirm reservation functionality
- Dynamic API routes using Next.js App Router

---

## Tech Stack

- Next.js
- TypeScript
- Prisma ORM
- SQLite
- Tailwind CSS

---

## How to Run Locally

Install dependencies:

```bash
npm install
```

Run Prisma migration:

```bash
npx prisma migrate dev
```

Seed sample data:

```bash
npx tsx prisma/seed.ts
```

Start development server:

```bash
npm run dev
```

Open browser:

```txt
http://localhost:3000
```

---

## Reservation Logic

When a user reserves a product:

- Available stock is checked
- Reserved units are incremented
- A reservation entry is created
- If stock is unavailable, API returns 409 error

The reservation flow uses Prisma transactions to reduce race condition issues during concurrent reservations.

---

## Future Improvements

- Reservation expiry timer
- Automatic reservation release
- Cancel reservation functionality
- Hosted PostgreSQL database
- Better UI styling
- Authentication system

---

## Author

Thanmayee Reddy
