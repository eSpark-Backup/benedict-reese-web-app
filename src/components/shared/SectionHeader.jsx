import cn from "classnames";
import global from "../styles/global.module.scss";

const SectionHeader = ({ title }) => {
  return (
    <header>
      <h3 className="text-[#000000] font-[Inter] font-normal text-[32px] leading-normal">
        {title}
      </h3>
    </header>
  );
};

export default SectionHeader;
