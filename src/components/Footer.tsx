import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

const SOCIAL_ICONS = [
  {
    name: "facebook",
    path: "M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "twitter",
    path: "M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z",
    viewBox: "0 0 24 20",
  },
  {
    name: "instagram",
    path: "M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z",
    viewBox: "0 0 24 24",
    evenOdd: true,
  },
];

const Footer = () => (
  <footer className="bg-[#101010]">
    <div className="xl:max-w-[1110px] mx-auto">
      <div className="h-1 bg-[#D87D4A] w-[101px] mx-auto md:mx-0 md:ml-[39px] xl:ml-0" />

      {/* === Mobile Layout === */}
      <div className="md:hidden px-6 py-12 flex flex-col items-center text-center space-y-12">
        <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />

        <nav className="flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
              className="text-white font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <p className="text-white/50 text-[15px] leading-[25px]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <p className="text-white/50 text-[15px] font-bold">
          Copyright 2025. All Rights Reserved
        </p>

        <div className="flex items-center space-x-4">
          {SOCIAL_ICONS.map((icon, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              viewBox={icon.viewBox}
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="hover:fill-[#D87D4A] transition-colors duration-300 cursor-pointer"
            >
              <path
                d={icon.path}
                {...(icon.evenOdd && {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                })}
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block px-[39px] xl:px-0 py-12 xl:hidden">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
            <nav className="flex space-x-8 pt-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="text-white font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <p className="text-white/50 text-[15px] leading-[25px] tracking-[0px] w-full lg:w-[540px]">
            {" "}
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.{" "}
          </p>
          <div className="flex justify-between items-center pt-8">
            <p className="text-white/50 font-bold text-[15px] leading-[25px] tracking-[0px]">
              {" "}
              Copyright 2025. All Rights Reserved{" "}
            </p>
            <div className="flex items-center space-x-4">
            {SOCIAL_ICONS.map((icon, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox={icon.viewBox}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="hover:fill-[#D87D4A] transition-colors duration-300 cursor-pointer"
              >
                <path
                  d={icon.path}
                  {...(icon.evenOdd && {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  })}
                />
              </svg>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* === Desktop Layout === */}
      <div className="hidden xl:block py-12 space-y-8">
        <div className="flex justify-between items-center">
          <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
          <nav className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                className="text-white font-bold text-[13px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-between items-center pt-8">
          <p className="text-white/50 text-[15px] leading-[25px] w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <div className="flex items-center space-x-4">
            {SOCIAL_ICONS.map((icon, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox={icon.viewBox}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="hover:fill-[#D87D4A] transition-colors duration-300 cursor-pointer"
              >
                <path
                  d={icon.path}
                  {...(icon.evenOdd && {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  })}
                />
              </svg>
            ))}
          </div>
        </div>

        <p className="text-white/50 font-bold text-[15px] leading-[25px] mt-20">
          Copyright 2025. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
