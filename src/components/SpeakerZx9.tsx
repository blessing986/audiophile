import Image from "next/image";
import Button from "./Button";

const SpeakerZx9 = () => {
  return (
    <section className="max-w-[1110px] mx-auto">
      <div className="bg-[#D87D4A] rounded-lg h-[600px] md:h-[720px] lg:h-[560px] flex flex-col lg:flex-row items-center lg:items-end justify-center gap-12 md:gap-20 lg:gap-40 my-10 relative mx-[31.5px] md:mx-[39px] lg:mx-6 xl:mx-0">
        <div className="absolute top-0 left-1 sm:hidden">
          <svg
            width="320"
            height="318"
            viewBox="0 0 320 318"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="160" cy="158" r="159.5" stroke="#E0986F" />
          </svg>
        </div>
        <div className="absolute top-5 left-6 sm:hidden">
          <svg
            width="279"
            height="279"
            viewBox="0 0 279 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="139.5" cy="139.5" r="139" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute bottom-[170px] left-0 sm:hidden">
          <svg
            width="327"
            height="437"
            viewBox="0 0 327 437"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="163" cy="158" r="278.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute top-0 left-16 md:left-24 hidden sm:block lg:hidden">
          <svg
            width="472"
            height="420"
            viewBox="0 0 472 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="236" cy="184" r="235.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute top-0 left-7 md:left-16 hidden sm:block lg:hidden">
          <svg
            width="542"
            height="455"
            viewBox="0 0 542 455"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="271" cy="184" r="270.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute bottom-[5%] hidden md:block lg:hidden">
          <svg
            width="689"
            height="656"
            viewBox="0 0 689 656"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="345" cy="184" r="471.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute top-0 left-0 hidden lg:block">
          <svg
            width="795"
            height="560"
            viewBox="0 0 795 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="323" cy="436" r="471.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-[45px] hidden lg:block">
          <svg
            width="542"
            height="395"
            viewBox="0 0 542 395"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="271" cy="271" r="270.5" stroke="#E0986F" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-20 hidden lg:block">
          <svg
            width="472"
            height="360"
            viewBox="0 0 472 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="236" cy="236" r="235.5" stroke="#E0986F" />
          </svg>
        </div>

        <Image
          src="/assets/zx9_speaker_mobile.png"
          alt="zx9 speaker"
          width={150}
          height={150}
          className="z-20 md:hidden"
        />

        <Image
          src="/assets/zx9_speaker_tablet.png"
          alt="zx9 speaker"
          width={200}
          height={200}
          className="z-20 hidden md:block lg:hidden"
        />

        <Image
          src="/assets/zx9_speaker.png"
          alt="zx9 speaker"
          width={400}
          height={400}
          className="z-20 hidden lg:block"
        />

        <div className="text-white space-y-6 md:space-y-[50px] lg:space-y-6 w-[349px] lg:pb-32 z-20 flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-[36px] md:text-[56px] leading-10 md:leading-[58px] tracking-[1.29px] md:tracking-[2px] uppercase text-center lg:text-start">
            ZX9
            <br />
            SPEAKER
          </h1>
          <p className="font-normal text-[15px] leading-[25px] text-white/75 text-center lg:text-start px-6 md:px-0">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
         <Button variant="black">See Product</Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerZx9;
