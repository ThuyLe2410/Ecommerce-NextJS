# E-commerce Next.js Application

A modern e-commerce web application built with Next.js 15, TypeScript, and Stripe integration for seamless payment processing.

## 🚀 Live Demo

**[View Live Demo](https://ecommerce-next-js-ivory-omega.vercel.app/)**

## ✨ Features

- **Modern UI**: Clean and responsive design with Tailwind CSS
- **Product Management**: Browse products with detailed product pages
- **Shopping Cart**: Add/remove items with persistent cart state using Zustand
- **Payment Integration**: Secure checkout with Stripe
- **Responsive Design**: Optimized for all device sizes
- **Product Carousel**: Interactive product showcase
- **Server Components**: Leverages Next.js 15's server components for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **State Management**: Zustand
- **Payment Processing**: Stripe
- **Carousel**: Embla Carousel & Swiper
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file and add your Stripe secret key:
```env
STRIPE_SECRET_KEY=your_stripe_secret_key_here
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3002`

## 🚀 Scripts

- `npm run dev` - Start development server (uses Turbopack for faster builds)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── app/
│   ├── checkout/          # Checkout page and actions
│   ├── products/          # Product listing and detail pages
│   ├── success/           # Success page after payment
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components
│   ├── store/             # Zustand store configuration
│   ├── Carousel.tsx       # Product carousel component
│   ├── Navbar.tsx         # Navigation component
│   ├── ProductCard.tsx    # Product card component
│   ├── ProductDetails.tsx # Product details component
│   └── ProductList.tsx    # Product list component
├── lib/
│   ├── stripe.ts          # Stripe configuration
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎯 Key Features Explained

### Shopping Cart
- Persistent cart state using Zustand with localStorage
- Add/remove items with quantity management
- Real-time cart updates across the application

### Payment Integration
- Secure payment processing with Stripe
- Product data fetched directly from Stripe's API
- Checkout flow with success page

### Product Management
- Dynamic product pages with detailed views
- Product carousel on homepage
- Responsive product grid layout

## 🔧 Configuration

The project uses modern tooling:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality
- **Turbopack** for faster development builds

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and modern web technologies.
