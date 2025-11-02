import Image from "next/image"

const BestAudioGear = () => {
  return (
    <section className="my-40 max-w-[1110px] mx-auto">
        <div className="hidden lg:flex items-center justify-center lg:px-6 xl:px-0">
          <div className="max-w-7xl w-full flex items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 xl:max-w-md">
              <h1 className="font-bold text-[40px] leading-11 tracking-[1.43px] uppercase mb-8">
                BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span>{" "}
                AUDIO GEAR
              </h1>
              <p className="text-black/50 font-normal text-[15px] leading-[25px] pr-2">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>

            <div className="flex-1 max-w-2xl">
              <Image
                src="/assets/person_wearing_headphones_desktop.png"
                alt="Person wearing headphones"
                width={500}
                height={500}
                className=""
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col px-6 mt-28">
          <Image
            src="/assets/person_wearing_headphones.png"
            alt="Person wearing headphones"
            width={500}
            height={500}
            className="w-full h-full object-cover sm:hidden"
          />
          <Image
            src="/public/assets/"
            alt="Person wearing headphones"
            width={500}
            height={500}
            className="w-full h-full object-cover hidden sm:block"
          />

          <div className="flex-1 flex flex-col justify-center px-3 py-12 md:pb-20">
            <h1 className="font-bold text-[28px] tracking-[1px] uppercase text-center mb-6 text-black sm:px-16 md:px-32">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span>{" "}
              AUDIO GEAR
            </h1>
            <p className="font-normal text-black/50 text-[15px] leading-[25px] text-center md:px-14">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </section>
  )
}

export default BestAudioGear
