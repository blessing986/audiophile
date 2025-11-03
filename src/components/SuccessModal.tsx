"use client";

import Image from "next/image";

interface SuccessModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  total: number;
  onClose: () => void;
}

const SuccessModal = ({ items, total, onClose }: SuccessModalProps) => {
  const shipping = 50;
  const grandTotal = total + shipping;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
      <div className="bg-white rounded-lg p-8 md:p-12 max-w-[540px] w-full max-h-[90vh] overflow-y-auto">
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          <svg
            width="26"
            height="21"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41406 10.4656L8.16558 17.2172L23.9687 1.41406"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        </div>

        <h2 className="text-[24px] md:text-[32px] font-bold uppercase tracking-[0.86px] md:tracking-[1.14px] mb-4 leading-7 md:leading-9">
          Thank you
          <br />
          for your order
        </h2>

        <p className="text-black/50 text-[15px] leading-[25px] mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className="mb-12">
          <div className="rounded-lg overflow-hidden flex flex-col sm:flex-row">
            {/* Items section */}
            <div className="bg-[#F1F1F1] p-6 sm:w-[246px]">
              {items.map((item, index) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={28}
                          height={32}
                        />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold leading-[25px] text-black">
                          {item.name}
                        </p>
                        <p className="text-black/50 text-[14px] font-bold leading-[25px]">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-black/50 text-[15px] font-bold">x{item.quantity}</p>
                  </div>
                  {index < items.length - 1 && (
                    <div className="border-t border-black/10 my-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Grand total section */}
            <div className="bg-black p-6 sm:w-[198px] flex flex-col justify-end">
              <p className="text-white/50 text-[15px] uppercase mb-2">
                Grand Total
              </p>
              <p className="text-white font-bold text-[18px]">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#D87D4A] text-white py-4 hover:bg-[#FBAF85] font-bold text-[13px] tracking-[1px] uppercase transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
