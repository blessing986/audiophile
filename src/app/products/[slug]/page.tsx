"use client";

import Button from "@/src/components/Button";
import ProductCard from "@/src/components/ProductCard";
import Image from "next/image";
import { useParams, notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "../../data/products";
import AudiophileProductsGrid from "@/src/components/AudiophileProductsGrid";
import BestAudioGear from "@/src/components/BestAudioGear";
import { useCart } from "@/src/context/CartContext";
import toast from "react-hot-toast";

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  if (!product) return notFound();

  const decrement = () => setCount((prev) => prev - 1);
  const increment = () => setCount((prev) => prev + 1);

   const handleAddToCart = () => {
    addToCart({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.images.main.desktop,
      quantity: count,
    });

    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      style: {
        background: "#D87D4A",
        color: "#fff",
        borderRadius: "8px",
        padding: "12px 16px",
      },
    });

    setCount(1);
  };

  return (
    <section className="max-w-[1110px] mx-auto">
      <button
        onClick={() => router.back()}
        className="text-black/50 font-normal text-[15px] leading-[25px] pt-6 lg:pt-10 px-7 xl:px-0 hover:text-[#D87D4A] transition-colors cursor-pointer"
      >
        Go back
      </button>

      <section className="flex flex-col md:flex-row gap-10 xl:gap-0 justify-between items-center mt-10 lg:mt-20 mb-4 md:mb-0 md:px-8 xl:px-0">
        {/* Image */}
        <div className="w-[327px] h-[352px] sm:w-[550px] md:w-[281px] md:h-[480px] lg:w-[540px] lg:h-[560px] rounded-lg bg-[#F1F1F1] flex items-center justify-center">
          <Image
            src={product.images.main.mobile}
            alt={product.name}
            width={200}
            height={200}
            className="lg:hidden"
          />
          <Image
            src={product.images.main.desktop}
            alt={product.name}
            width={300}
            height={300}
            className="hidden lg:block"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start lg:items-start gap-6 lg:w-[445px] px-7">
          {product.newProduct && (
            <p className="text-[#D87D4A] font-normal text-sm md:text-[12px] lg:text-sm tracking-[10px] md:tracking-[8.57px] lg:tracking-[10px] uppercase">
              New Product
            </p>
          )}

          <h1 className="text-[28px] sm:text-[40px] md:text-[28px] lg:text-[40px] font-bold text-black sm:leading-11 md:leading-8 lg:leading-11 tracking-[1px] lg:tracking-[1.43px] uppercase text-start lg:text-start">
            {product.name}
            {product.subname && (
              <>
                <br />
                {product.subname}
              </>
            )}
          </h1>
          <p className="text-black/50 font-normal text-[15px] leading-[25px] w-[327px] sm:w-[562px] md:w-[340px] lg:w-[445px] text-start lg:text-start">
            {product.description}
          </p>

          <p className="text-black font-bold text-[18px] tracking-[1.29px] uppercase">
            $ {product.price.toLocaleString()}
          </p>

          <div className="flex gap-4">
            <div className="flex items-center justify-center gap-8 bg-[#F1F1F1] w-[120px] h-12">
              <button
                onClick={decrement}
                className="text-black/25 text-[13px] tracking-[1px] font-bold hover:text-[#D87D4A] transition"
              >
                -
              </button>
              <span className="text-[13px] font-bold">{count}</span>
              <button
                onClick={increment}
                className="text-black/25 text-[13px] font-bold hover:text-[#D87D4A] transition tracking-[1px]"
              >
                +
              </button>
            </div>
            <Button
              variant="orange"
              onClick={handleAddToCart
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 xl:px-0 py-20 lg:py-32 ">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24">
          {/* Features Section */}
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold leading-9 tracking-[0.86px] md:tracking-[1.14px] mb-8 uppercase">
              FEATURES
            </h2>

            <div className="space-y-6 text-black/50 text-[15px] leading-[25px] font-normal lg:w-[625px]">
              {product.features.map((feature, i) => (
                <p key={i}>{feature}</p>
              ))}
            </div>
          </div>

          {/* In The Box Section */}
          <div className="flex flex-col md:flex-row lg:flex-col md:gap-40 lg:gap-0">
            <h2 className="text-[24px] md:text-[32px] leading-9 font-bold mb-8 tracking-[0.86px] md:tracking-[1.14px] uppercase text-black">
              IN THE BOX
            </h2>

            <ul className="space-y-3">
              {product.boxItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D87D4A] text-[15px] leading-[25px] font-bold min-w-8">
                    {item.quantity}
                  </span>
                  <span className="text-black/50 font-normal text-[15px] leading-[25px]">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row justify-between gap-6 px-6 lg:px-2 pb-20">
        <div className="flex flex-col gap-6 lg:pl-3 xl:pl-0">
          <Image
            src={product.images.gallery[0]}
            alt={product.name}
            width={500}
            height={500}
          />
          <Image
            src={product.images.gallery[1]}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>

        <Image
          src={product.images.gallery[2]}
          alt={product.name}
          width={600}
          height={600}
        />
      </section>

      <section className="md:px-8 xl:px-0">
        <h2 className="font-bold text-[24px] md:text-[32px] leading-9 tracking-[0.86px] md:tracking-[1.14px] uppercase text-center">
          you may also like
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-4 my-10 md:my-20">
          {product.recommendations.map((rec, i) => (
            <ProductCard key={i} imageSrc={rec.image} title={rec.title} />
          ))}
        </div>
      </section>

      <AudiophileProductsGrid />

      <BestAudioGear />
    </section>
  );
};

export default ProductDetailPage;
