import Image from "next/image";
import Button from "./Button";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageMobile: string;
  imageDesktop: string;
  reverse?: boolean;
  isNew?: boolean;
}

const ProductSection = ({
  title,
  subtitle,
  description,
  imageMobile,
  imageDesktop,
  reverse = false,
  isNew = false,
}: ProductSectionProps) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-10 xl:gap-0 justify-between items-center max-w-[1110px] mx-auto mt-20 mb-4 md:mt-32 md:mb-0 lg:mt-40 lg:px-8 xl:px-0`}
    >
      {/* Image */}
      <div className="w-[327px] h-[352px] sm:w-[550px] md:w-[689px] lg:w-[540px] lg:h-[560px] rounded-lg bg-[#F1F1F1] flex items-center justify-center">
        <Image
          src={imageMobile}
          alt={title}
          width={200}
          height={200}
          className="lg:hidden"
        />
        <Image
          src={imageDesktop}
          alt={title}
          width={300}
          height={300}
          className="hidden lg:block"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start gap-6">
        {isNew && (
          <p className="text-[#D87D4A] font-normal text-sm tracking-[10px] uppercase">
            New Product
          </p>
        )}
        <h1 className="text-[28px] sm:text-[40px] font-bold text-black sm:leading-11 tracking-[1px] md:tracking-[1.43px] uppercase text-center lg:text-start">
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </h1>
        <p className="text-black/50 font-normal text-[15px] leading-[25px] w-[327px] sm:w-[562px] lg:w-[445px] text-center lg:text-start">
          {description}
        </p>
        <Button variant="orange">See Product</Button>
      </div>
    </section>
  );
};

export default ProductSection;
