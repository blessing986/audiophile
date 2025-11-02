type ButtonVariant = "default" | "black" | "orange";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button = ({ children, variant = "default", onClick }: ButtonProps) => {
  const baseStyles =
    "w-40 h-12 font-bold text-[13px] tracking-[1px] uppercase transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    default:
      "border border-black text-black hover:bg-black hover:text-white",
    black:
      "bg-black text-white hover:bg-[#4C4C4C]",
    orange:
      "bg-[#D87D4A] text-white hover:bg-[#fbaf85]",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;

