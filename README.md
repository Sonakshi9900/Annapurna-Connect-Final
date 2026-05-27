# 🍱 Annapurna Connect

> A Next.js web application bridging the gap between food donors and those in need — reducing food waste and fighting hunger.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 About the Project

**Annapurna Connect** is a platform designed to connect food donors (restaurants, households, events) with NGOs, food banks, and individuals in need. Inspired by the goddess of food and nourishment, *Annapurna*, the project aims to ensure that no food goes to waste.

---

## ✨ Features

- 🔗 Connect donors with recipients in real-time
- 📍 Location-based food listing and discovery
- 📋 Easy food donation listing and management
- 🔔 Notifications for nearby food availability
- 📱 Responsive design for mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Geist Font](https://vercel.com/font) | Typography |
| [Vercel](https://vercel.com) | Deployment |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- npm / yarn / pnpm / bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sonakshi9900/Annapurna-Connect-Final.git
   cd Annapurna-Connect-Final
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the app running.

---

## 📁 Project Structure

```
Annapurna-Connect-Final/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── public/               # Static assets
├── lib/                  # Utility functions and helpers
├── .env.local            # Environment variables (not committed)
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

> **Note:** You can start editing the app by modifying `app/page.tsx`. The page auto-updates as you save changes.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) — features and API reference
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## ☁️ Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ to fight food waste and hunger</p>

