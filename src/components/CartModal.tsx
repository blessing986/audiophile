"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/context/CartContext";

const CartModal = () => {
  const router = useRouter();
  const {
    items,
    clearCart,
    total,
    isOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (!isOpen) return null;

    const handleCheckout = () => {
    toggleCart();
    router.push("/checkout"); 
  };

  return (
    <div className="fixed inset-0 bg-black/50">
      <div
        className="flex justify-center sm:justify-end items-start pt-28 md:pt-40 z-50 max-w-[1110px] mx-auto"
        onClick={toggleCart} // close when background is clicked
      >
        <div
          className="bg-white rounded-lg p-6 w-[377px] shadow-lg relative mx-4 sm:mx-0 sm:mr-6 xl:mr-10"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[18px] uppercase tracking-[1.29px]">
              Cart ({items.length})
            </h2>
            <button
              onClick={clearCart}
              className="text-black/50 text-[15px] hover:text-[#D87D4A] underline leading-[25px] font-normal cursor-pointer"
            >
              Remove all
            </button>
          </div>

          <div className="space-y-6 mb-6">
            {items.length === 0 ? (
              <p className="text-center text-black/50">Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={44}
                        height={44}
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold leading-[25px] text-black">
                        {item.name}
                      </p>
                      <p className="text-black/50 text-[14px] font-bold leading-[25px]">
                        $ {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center bg-[#F1F1F1] w-24 h-8 justify-center gap-4 rounded-md">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-black/25 text-[13px] tracking-[1px] font-bold hover:text-[#D87D4A] transition"
                    >
                      -
                    </button>
                    <span className="text-[13px] font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-black/25 text-[13px] font-bold hover:text-[#D87D4A] transition tracking-[1px]"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-black/50 text-[15px] uppercase">Total</p>
            <p className="font-bold text-[18px]">$ {total.toLocaleString()}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#D87D4A] text-white py-3 hover:bg-[#FBAF85] font-bold text-[13px] tracking-[1px] uppercase transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
