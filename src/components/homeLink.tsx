import { FaArrowRight } from "react-icons/fa";
import { HoverBox } from "./misc/hoverBox";

interface HomeLinkProps {
  title: string;
  href: string;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ title, href }) => {
  return (
    <div className="relative group/link cursor-pointer">
      <a
        href={href}
        className="text-text uppercase xl:text-7xl text-4xl flex z-50"
      >
        {title}
        <FaArrowRight
          size={50}
          className="w-6 md:w-auto inline ml-2 group-hover/link:animate-bounce-x md:ms-12 ms-4 -mt-2"
        />
      </a>
      <HoverBox href={href} />
    </div>
  );
};
