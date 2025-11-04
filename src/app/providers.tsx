"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";
import CartModal from "../components/CartModal";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <CartProvider>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <CartModal />
      </CartProvider>
    </ConvexProvider>
  );
}
