interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="bg-[#0E0E0E] h-[126px] md:h-44 lg:h-[236px] flex items-center justify-center">
      <h1 className="font-bold text-[28px] md:text-[40px] md:leading-11 tracking-[2px] md:tracking-[1.43px] uppercase text-center text-white">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
