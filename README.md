# Restaurant Dashboard – Frontend Technical Test

A simplified restaurant management dashboard built with **React**, designed to simulate a **kitchen monitoring interface** where restaurant staff can visualize active tables and inspect order details.

The objective of this project is to demonstrate **clean frontend architecture, responsive UI design, and scalable component structure**.

---

# Features

- Table overview displaying active restaurant tables
- Interactive table selection
- Order detail panel with itemized order information
- Order total calculation
- Visual order status indicators
- Dashboard statistics panel
- Fully responsive layout (mobile, tablet, desktop)
- Clean and modular component architecture

---

# UI / UX Highlights

- Modern dashboard layout optimized for clarity
- Status badges with color indicators
- Interactive table cards
- Sticky order detail panel on larger screens
- Lightweight interface for fast readability
- Simple kitchen monitoring indicator in the navbar

---

# Tech Stack

- **React**
- **Vite**
- **TailwindCSS**
- **React Icons**

---

# Project Structure

```
src
│
├── components
│   ├── dashboard
│   │   └── DashboardStats.jsx
│   │
│   ├── orders
│   │   ├── OrderDetail.jsx
│   │   └── OrderItem.jsx
│   │
│   ├── tables
│   │   └── TableCard.jsx
│   │
│   └── ui
│       └── StatusBadge.jsx
│
├── hooks
│   └── useOrders.js
│
├── data
│   └── mockOrders.js
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

---

# Application Behavior

The dashboard simulates a **restaurant floor monitoring system**.

Users can:

1. View all active tables in the restaurant.
2. Select a table to inspect its order.
3. Visualize each item in the order with quantity and price.
4. See the order status (Pending, Preparing, Served).
5. Inspect summary statistics from the dashboard panel.

---

# Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# Possible Improvements

Future iterations could include:

- Real-time updates using WebSockets
- Table filtering by order status
- Kitchen display mode
- Dark mode support
- Backend API integration
- Order editing functionality

---

# Design Goals

The main design principles for this project were:

- **Clarity** → A dashboard optimized for fast order inspection.
- **Responsiveness** → Adaptable layout for different screen sizes.
- **Modularity** → Component-based structure for easy scalability.
- **Simplicity** → Lightweight interface focused on usability.

---

# Author

**Martín Zacarías Gómez Arteaga**  
Frontend Developer
