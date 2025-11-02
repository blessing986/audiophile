import Image from "next/image";
import AudiophileProductsGrid from "../components/AudiophileProductsGrid";
import Hero from "../components/Hero";
import Button from "../components/Button";
import SpeakerZx9 from "../components/SpeakerZx9";
import BestAudioGear from "../components/BestAudioGear";

export default function Home() {
  return (
    <>
      <Hero />
      <AudiophileProductsGrid />
      <SpeakerZx9 />

      <section className="px-6 mb-8">
        <div className="relative max-w-[1110px] mx-auto">
          <Image
            src="/assets/zx7_speaker.png"
            alt="zx7_speaker"
            width={500}
            height={500}
            className="w-full h-auto sm:hidden"
          />

          <Image
            src="/assets/zx7_speaker_tablet.png"
            alt="zx7_speaker"
            width={500}
            height={500}
            className="w-full h-auto hidden sm:block lg:hidden"
          />
          <Image
            src="/assets/zx7_speaker_desktop.png"
            alt="zx7_speaker"
            width={500}
            height={500}
            className="w-full h-auto hidden lg:block"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-12 sm:px-20 md:px-24 gap-6">
            <h2 className="font-bold text-[28px] tracking-[2px] uppercase text-black">
              ZX7 SPEAKER
            </h2>

            <Button>See Product</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center md:flex-row gap-6 md:gap-4 px-6 xl:px-0 my-8 max-w-[1110px] mx-auto w-full">
        <Image
          src="/assets/yx1_earphones.png"
          alt="yx1_earphones"
          width={500}
          height={500}
          className="w-full h-auto md:hidden"
        />
        <Image
          src="/assets/yx1_earphones_tablet.png"
          alt="yx1_earphones"
          width={360}
          height={400}
          className="hidden md:block lg:hidden md:flex-1 md:h-80 object-cover rounded-lg"
        />
        <Image
          src="/assets/yx1_earphones_desktop.png"
          alt="yx1_earphones"
          width={650}
          height={650}
          className="hidden lg:block lg:flex-1 lg:h-80 object-cover rounded-lg"
        />

        <div className="bg-[#F1F1F1] rounded-lg h-[200px] sm:h-[300px] md:h-80 w-full md:flex-1 px-8 flex flex-col gap-4 items-start justify-center">
          <h2 className="font-bold text-[28px] tracking-[2px] uppercase text-black">
            YX1 EARPHONES
          </h2>

          <Button>See Product</Button>
        </div>
      </section>

      <BestAudioGear />
    </>
  );
}
