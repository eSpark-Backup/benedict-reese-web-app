const SectionHeader = ({ title, className }) => {
  return (
    <header>
      <h3
        className={`text-[#000000] font-normal text-[32px] leading-normal ${className}`}
      >
        {title}
      </h3>
    </header>
  );
};

export default SectionHeader;
