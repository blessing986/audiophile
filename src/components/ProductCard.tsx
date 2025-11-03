import Image from "next/image";
import Button from "./Button";

interface ProductCardProps {
  imageSrc: string;
  title: string;
}

const ProductCard = ({
  imageSrc,
  title,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="bg-[#F1F1F1] w-[327px] sm:w-[260px] h-[120px] md:w-[223px] md:h-[318px] xl:w-[350px] lg:h-[318px] flex items-center justify-center rounded-lg mx-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="md:hidden"
        />
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          className="hidden md:block"
        />
      </div>
      <p className="font-bold text-[24px] tracking-[1.71px] uppercase text-center">
        {title}
      </p>

      <Button variant="orange">See product</Button>
    </div>
  );
};

export default ProductCard;
