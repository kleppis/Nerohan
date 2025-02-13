import { FaArrowRight } from "react-icons/fa";

interface HomeLinkProps {
  title: string;
  href: string;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ title, href }) => {
  return (
    <div className="relative group/link cursor-pointer hover:text-btnHover">
      <a
        href={href}
        className="text-text display uppercase  flex z-50 group-hover/link:btn"
      >
        {title}
        <FaArrowRight
          size={50}
          className=" w-6 md:w-auto inline ml-2 group-hover/link:animate-bounce-x md:ms-12 ms-4 -mt-1 xl:items-center"
        />
      </a>
    </div>
  );
};
