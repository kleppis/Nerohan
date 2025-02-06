import { FaArrowRight } from "react-icons/fa";
import { HoverBox } from "./hoverBox";

interface HomeLinkProps {
  title: string;
  href: string;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ title, href }) => {
  return (
    <div className="relative group/link cursor-pointer">
      <a href={href} className="text-text uppercase text-7xl flex z-50">
        {title}
        <FaArrowRight
          size={50}
          className="inline ml-2 group-hover/link:animate-bounce-x ms-12"
        />
      </a>
      <HoverBox href={href} />
    </div>
  );
};
