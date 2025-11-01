import Image from "next/image";

const AudiophileProductsGrid = () => {
  const products = [
    {
      id: 1,
      name: "HEADPHONES",
      image: "/assets/headphones.png",
    },
    {
      id: 2,
      name: "SPEAKERS",
      image: "/assets/speakers.png",
    },
    {
      id: 3,
      name: "EARPHONES",
      image: "/assets/earphones.svg",
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center p-6 pb-20 md:pt-20 md:pb-24">
      <div className="w-full max-w-[1110px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-2 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative pt-20">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                </div>

                {/* Card */}
                <div className="bg-[#F1F1F1] rounded-lg p-8 pt-24 pb-12 transition-transform duration-300 group-hover:scale-105 h-[165px] lg:h-[204px]">
                  <div className="text-center">
                    <h3 className="font-bold text-[15px] tracking-[1.07px] uppercase text-black mb-3">
                      {product.name}
                    </h3>

                    <button className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[1px] text-black/50 hover:text-[#D87D4A] transition-colors duration-200 cursor-pointer">
                      SHOP
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Path 2"
                          d="M0.707031 0.707031L5.70703 5.70703L0.707031 10.707"
                          stroke="#D87D4A"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudiophileProductsGrid;
