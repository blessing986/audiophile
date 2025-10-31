"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Mobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0E0E0E] md:hidden relative">
      <div className="flex items-center justify-between px-6 py-8 border-b border-white/10">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {!isMobileMenuOpen ? (
            <Image
              src="/icons/hamburger.svg"
              alt="Hamburger Menu"
              width={20}
              height={20}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </button>

        <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />

        <button>
          <Image
            src="/icons/carts.svg"
            alt="Cart icon"
            width={30}
            height={20}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`absolute left-0 right-0 top-[90px] bg-[#0E0E0E] rounded-b-lg p-8 z-40 transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"].map((item) => (
            <Link
              key={item}
              href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
              className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Mobile;
