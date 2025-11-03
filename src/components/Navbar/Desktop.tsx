"use client";

import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const Desktop = () => {
  const { toggleCart } = useCart();

  return (
    <nav className="hidden lg:flex bg-[#0E0E0E] ">
      <div className="xl:max-w-[1110px] mx-auto flex justify-between items-center w-full px-6 py-8 xl:px-0 border-b border-white/20">
        <Image src="assets/logo.svg" alt="Logo" width={150} height={40} />

        <div className="flex gap-8 xl:gap-10">
          {["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"].map((item) => (
            <Link
              key={item}
              href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
              className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <button onClick={toggleCart} className="cursor-pointer">
          <Image src="icons/carts.svg" alt="Cart icon" width={30} height={20} />
        </button>
      </div>
    </nav>
  );
};

export default Desktop;
