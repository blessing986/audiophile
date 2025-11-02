import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroContent = ({ align = "center" }: { align?: "center" | "left" }) => (
  <div
    className={`flex flex-col ${
      align === "center" ? "items-center text-center" : "items-start text-left"
    } gap-6`}
  >
    <p className="text-white/50 text-sm tracking-[10px] uppercase">
      New Product
    </p>
    <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-bold text-white leading-[58px] tracking-[1.5px] uppercase">
      XX99 MARK II
      <br />
      HEADPHONES
    </h1>
    <p className="text-white/75 text-[15px] leading-[25px] max-w-[350px]">
      Experience natural, lifelike audio and exceptional build quality made for
      the passionate music enthusiast.
    </p>
    <Button variant="orange">See Product</Button>
  </div>
);

const Hero = () => {
  return (
    <>
      <section className="relative h-[600px] sm:h-screen w-full xl:hidden">
        <Image
          src="/assets/image-header.jpg"
          alt="Hero background"
          fill
          className="object-cover md:hidden"
          priority
        />
        <Image
          src="/assets/image-header-tablet.jpg"
          alt="Hero background"
          fill
          className="object-cover hidden md:block xl:hidden"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <HeroContent align="center" />
        </div>
      </section>

      {/* Desktop View - Horizontal Layout */}

      <section className="relative hidden xl:block h-[600px]">
        <Image
          src="/assets/image-hero-desktop.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col gap-8 h-full justify-center">
          <HeroContent align="left" />
        </div>
      </section>
    </>
  );
};

export default Hero;
