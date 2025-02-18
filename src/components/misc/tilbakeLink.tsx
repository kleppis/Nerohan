import { FaArrowLeft } from "react-icons/fa";

interface LinkProps {
  href: string;
  title: string;
}

export const TilbakeLink: React.FC<LinkProps> = ({ href, title }) => {
  return (
    <a
      className="uppercase text-2xl flex group/link btn opacity-55"
      href={href}
    >
      <FaArrowLeft className="group-hover/link:animate-bounce-x-left mt-[3px]" />

      {title}
    </a>
  );
};
